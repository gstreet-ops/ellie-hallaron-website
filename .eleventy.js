module.exports = function (eleventyConfig) {
  // --- Passthrough copy ---
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  // --- Custom filters ---

  // Convert \n in blurb verses to <br> tags
  eleventyConfig.addFilter("nl2br", (str) => {
    if (!str) return "";
    return str.replace(/\n/g, "<br>");
  });

  // URL-encode a string for query parameters
  eleventyConfig.addFilter("urlencode", (str) => encodeURIComponent(String(str || "")));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
