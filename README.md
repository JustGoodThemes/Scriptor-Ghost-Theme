# Scriptor

Scriptor is a minimal, clean, modern & responsive Ghost theme for writers.

See a live demo of Scriptor [here](https://scriptor-ghost.herokuapp.com).

[![Scriptor showcase](assets/scriptor-preview.png)](https://scriptor-ghost.herokuapp.com)

## Disqus Comments

Scriptor theme comes with Disqus commenting built-in, you just need to have a Disqus account (create it at [Disqus.com](https://disqus.com/)). To enable commenting, you need to change the default Disqus account shortname "my_disqus_shortname" on line 11 in the **comments.hbs** file located in the partials theme folder (Ghost/content/themes/scriptor/partials).

```
var disqus_shortname = 'my_disqus_shortname';
```

If you wish to disable commenting, just remove the following lines from the **post.hbs** file located in the main theme folder:

```
{{!-- The tag below includes the theme comments - partials/comments.hbs --}}
{{> comments}}
```

## Copyright Information (Footer)

You will find all copyright information in the `<div>` with the class **"site-info"** in the **footer.hbs** file within the partials folder (Ghost/content/themes/scriptor/partials) of the theme.

## Credits

- [Droid Serif font](https://www.google.com/fonts/specimen/Droid+Serif)
- [Lato font](https://fonts.google.com/specimen/Lato)
- [Font Awesome icons](http://fontawesome.io)
- [FitVids plugin](http://fitvidsjs.com/)

## Copyright & License

Copyright (c) 2015-2018 Just Good Themes - Released under the [MIT license](LICENSE).