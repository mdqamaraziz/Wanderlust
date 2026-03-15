const Listing = require("../models/listing.js");


module.exports.index = async (req, res) => {
    let allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path: "reviews", populate: {
                path: "author",
            }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    console.log(listing.owner);
    res.render("listings/show.ejs", { listing });
};



module.exports.createNewListing = async (req, res, next) => {
    try {
        const { location } = req.body.listing;

        const url = req.file.path;
        const filename = req.file.filename;

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };

        let lat = 25.5941;
        let lon = 85.1376;

        if (location) {

            const geoURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`;

            const response = await fetch(geoURL, {
                headers: {
                    "User-Agent": "WanderlustApp/1.0"
                }
            });

            const data = await response.json();

            console.log("Geocode result:", data);

            if (data.length > 0) {
                lat = parseFloat(data[0].lat);
                lon = parseFloat(data[0].lon);
            }
        }

        newListing.geometry = {
            type: "Point",
            coordinates: [lon, lat]
        };

        await newListing.save();

        req.flash("success", "New Listing Created!");
        res.redirect("/listings");

    } catch (err) {
        console.log(err);
        next(err);
    }
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_200,w_250")
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};


module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    // Update basic listing data
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    // If image updated
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    // If location updated → get new coordinates
    if (req.body.listing.location) {

        const geoURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(req.body.listing.location)}&limit=1`;

        const response = await fetch(geoURL, {
            headers: {
                "User-Agent": "WanderlustApp/1.0"
            }
        });

        const data = await response.json();

        if (data.length > 0) {

            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);

            listing.geometry = {
                type: "Point",
                coordinates: [lon, lat]
            };

            await listing.save();
        }
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing, "deleted succesfully");
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}