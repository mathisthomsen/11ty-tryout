module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');

    eleventyConfig.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
          if (!item.data.tags) return
          item.data.tags
            .filter((tag) => !['all', 'featured', 'article'].includes(tag))
            .forEach((tag) => tagsSet.add(tag))
        })
        return [...tagsSet].sort((a, b) => b.localeCompare(a))
      })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}