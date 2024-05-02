Module.register("MMM-nftSlideshow", {
    // Default module config
    defaults: {
        imagePaths: [], // Array of image paths
        videoPaths: [], // Array of video paths
        slideshowInterval: 5000 // Interval between slides in milliseconds
    },

    // Override start method
    start: function() {
        var self = this;
        this.currentIndex = 0;

        // Start the slideshow
        this.startSlideshow();
    },

    // Override getStyles method
    getStyles: function() {
        return ["MMM-nftSlideshow.css"];
    },

    // Override getDom method
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "nft-slideshow";

        // Create an img element for each image path
        this.config.imagePaths.forEach(function(imagePath) {
            var img = document.createElement("img");
            img.src = imagePath;
            wrapper.appendChild(img);
        });

        // Create a video element for each video path
        this.config.videoPaths.forEach(function(videoPath) {
            var video = document.createElement("video");
            video.src = videoPath;
            video.controls = true; // Add controls for video playback
            wrapper.appendChild(video);
        });

        return wrapper;
    },

    // Start the slideshow
    startSlideshow: function() {
        var self = this;

        // Advance to the next slide after the specified interval
        setInterval(function() {
            self.showNextSlide();
        }, this.config.slideshowInterval);
    },

    // Show the next slide
    showNextSlide: function() {
        var slides = document.querySelectorAll(".nft-slideshow > *");
        if (slides.length > 0) {
            slides[this.currentIndex].style.display = "none";
            this.currentIndex = (this.currentIndex + 1) % slides.length;
            slides[this.currentIndex].style.display = "block";
        }
    }
});
