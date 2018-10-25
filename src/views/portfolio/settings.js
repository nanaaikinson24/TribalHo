export const settings = {
    filters: "#js-filters-full-width",
    loadMore: "#js-loadMore-full-width",
    loadMoreAction: "auto",
    layoutMode: "mosaic",
    sortToPreventGaps: true,
    defaultFilter: "*",
    animationType: "scaleDown",
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: "responsive",
    mediaQueries: [
        {
            width: 1500,
            cols: 4
        },
        {
            width: 1100,
            cols: 3
        },
        {
            width: 800,
            cols: 2
        },
        {
            width: 480,
            cols: 2,
            options: {
                caption: "",
                gapHorizontal: 10,
                gapVertical: 10
            }
        }
    ],
    caption: "zoom",
    displayType: "fadeIn",
    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
    lightboxTitleSrc: "data-title"
};
