import {registerApplication, start, LifeCycles} from "single-spa";

registerApplication({
    name: "@unisabana/mf-navbar",
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            "@unisabana/mf-navbar"
            ),
    activeWhen: ["/"],
});

registerApplication({
    name: "@unisabana/mf-estudiantes",
    app: () =>
        /* webpackIgnore: true */ // @ts-ignore-next
        import("@unisabana/mf-estudiantes"),
    activeWhen: ["/estudiantes"],
});

registerApplication({
    name: "@unisabana/mf-notas",
    app: () =>
        /* webpackIgnore: true */ // @ts-ignore-next
        import("@unisabana/mf-notas"),
    activeWhen: ["/notas"],
});

registerApplication({
    name: "@unisabana/mf-reportes",
    app: () =>
        /* webpackIgnore: true */ // @ts-ignore-next
        import("@unisabana/mf-reportes"),
    activeWhen: ["/reportes"],
});




start({
    urlRerouteOnly: true,
});
