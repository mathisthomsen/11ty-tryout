module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    let markdownIt = require("markdown-it");
    let markdownItFootnote = require("markdown-it-footnote");
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    let markdownLib = markdownIt(options).use(markdownItFootnote);

    eleventyConfig.setLibrary("md", markdownLib);
    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
          if (!item.data.tags) return
          item.data.tags
            .filter((tag) => !['all', 'featured', 'article', 'pages'].includes(tag))
            .forEach((tag) => tagsSet.add(tag))
        })
        return [...tagsSet].sort((a, b) => a.localeCompare(b))
      })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}