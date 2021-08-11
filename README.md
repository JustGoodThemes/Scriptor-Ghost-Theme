# Scriptor

Scriptor is a minimal, clean, modern & responsive Ghost theme for writers.

See a live demo of Scriptor [here](https://scriptor.justgoodthemes.com/).

[![Scriptor showcase](assets/scriptor-preview.png)](https://scriptor.justgoodthemes.com/)

## Disqus Comments

Scriptor theme comes with Disqus commenting built-in, you just need to have a Disqus account (create it at [Disqus.com](https://disqus.com/)). To enable commenting, you just need to add your Disqus shortname to the "Site Header" field located in **Settings** → **Code injection** in your Ghost admin:

```
<script>
    const disqusShortname = 'YOUR_DISQUS_SHORTNAME';
</script>
```

If you wish to disable commenting, just remove the following lines from the `post.hbs` file located in the main theme folder:

```
{{!-- The tag below includes the theme comments - partials/comments.hbs --}}
{{> comments}}
```

## Social Links

To add Facebook and Twitter links, navigate to **Settings** → **General**, click **Expand** next to **Social accounts** and enter the URLs of your Facebook and Twitter profiles.

All other social media links can be added manually in the `footer.hbs` file located in the `partials` folder of the theme. For instance, if you want to add the link to your Instagram account, add the following code inside the `<div>` element with the class of `footer-social`:

```
<a href="URL_TO_YOUR_INSTAGRAM_PROFILE" target="_blank" rel="noopener">
    <span class="sr-only">Instagram</span>
    {{> "icons/instagram"}}
</a>
```

To see the available icons, please check the `icons` folder of the theme located in the `partials` folder.

## Translation

The **Scriptor** theme is fully translatable. You can find the default file in the `locales` folder. Copy `locales/en.json` to `locales/[language_code].json`. The `language_code` must be replaced with a valid code. You can edit the renamed translation file with any plain text editor.

To find more information on how to translate the theme, check [Ghost documentation](https://ghost.org/docs/themes/helpers/translate/).

## Development

To start developing locally, you need to have Ghost installed on your machine. Please follow installation instructions provided in [Ghost documentation](https://ghost.org/docs/install/local/).

The theme stylesheet is located in ```/assets/css/```.

## Theme Support

If you find any issues with the theme, please send us an [email](mailto:support@justgoodthemes.com) or create an [issue](https://github.com/JustGoodThemes/Scriptor-Ghost-Theme/issues) in the theme repo.  


## Credits

- [Lato font](https://fonts.google.com/specimen/Lato)
- [Simple Icons](https://simpleicons.org/)
- [Reframe.js](https://github.com/yowainwright/reframe.js)

## Copyright & License

Copyright (c) 2015-2021 Just Good Themes - Released under the [MIT license](LICENSE).
