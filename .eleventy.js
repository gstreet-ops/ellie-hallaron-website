module.exports = function (eleventyConfig) {
  // --- Passthrough copy ---
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/admin");

  // --- Custom filters ---

  // Convert \n in blurb verses to <br> tags
  eleventyConfig.addFilter("nl2br", (str) => {
    if (!str) return "";
    return str.replace(/\n/g, "<br>");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    // Change to "/" when custom domain (elliehallaron.com) is configured
    pathPrefix: "/ellie-hallaron-website/",
  };
};
