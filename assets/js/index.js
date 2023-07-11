// Responsive video embeds
(function (window, document) {
    const makeVideoEmbedsResponsive = function makeVideoEmbedsResponsive() {
        const videoEmbeds = [
            'iframe[src*="youtube.com"]',
            'iframe[src*="vimeo.com"]'
        ];
        reframe(videoEmbeds.join(','));
    };
    document.addEventListener('DOMContentLoaded', makeVideoEmbedsResponsive);
})(window, document);
