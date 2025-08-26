import {registerApplication, start, LifeCycles} from "single-spa";


// ...existing code...
registerApplication({
        name: "@unisabana/mf-navbar",
        app: () =>
                import(
                        /* webpackIgnore: true */ // @ts-ignore-next
                        "@unisabana/mf-navbar"
                ).catch(() => ({
                        bootstrap: () => Promise.resolve(),
                        mount: () => {
                            const el = document.createElement('div');
                            el.id = `error-mf-navbar`;
                            el.innerHTML = `<div style='padding:2rem;color:red;text-align:center;'>Error: No se pudo cargar el microfrontend <b>@unisabana/mf-navbar</b></div>`;
                            let container = document.getElementById('single-spa-application:@unisabana/mf-navbar');
                            if (!container) {
                                container = document.createElement('div');
                                container.id = 'single-spa-application:@unisabana/mf-navbar';
                                document.body.appendChild(container);
                            }
                            container.appendChild(el);
                            return Promise.resolve();
                        },
                        unmount: () => {
                            const el = document.getElementById(`error-mf-navbar`);
                            if (el && el.parentNode) el.parentNode.removeChild(el);
                            return Promise.resolve();
                        }
                })),
        activeWhen: ["/"],
});

registerApplication({
    name: "@unisabana/mf-estudiantes",
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            "@unisabana/mf-estudiantes"
        ).catch(() => ({
            bootstrap: () => Promise.resolve(),
            mount: () => {
                const el = document.createElement('div');
                el.id = `error-mf-estudiantes`;
                el.innerHTML = `<div style='padding:2rem;color:red;text-align:center;'>Error: No se pudo cargar el microfrontend <b>@unisabana/mf-estudiantes</b></div>`;
                let container = document.getElementById('single-spa-application:@unisabana/mf-estudiantes');
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'single-spa-application:@unisabana/mf-estudiantes';
                    document.body.appendChild(container);
                }
                container.appendChild(el);
                return Promise.resolve();
            },
            unmount: () => {
                const el = document.getElementById(`error-mf-estudiantes`);
                if (el && el.parentNode) el.parentNode.removeChild(el);
                return Promise.resolve();
            }
        })),
    activeWhen: ["/estudiantes"],
});

registerApplication({
    name: "@unisabana/mf-notas",
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            "@unisabana/mf-notas"
        ).catch(() => ({
            bootstrap: () => Promise.resolve(),
            mount: () => {
                const el = document.createElement('div');
                el.id = `error-mf-notas`;
                el.innerHTML = `<div style='padding:2rem;color:red;text-align:center;'>Error: No se pudo cargar el microfrontend <b>@unisabana/mf-notas</b></div>`;
                let container = document.getElementById('single-spa-application:@unisabana/mf-notas');
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'single-spa-application:@unisabana/mf-notas';
                    document.body.appendChild(container);
                }
                container.appendChild(el);
                return Promise.resolve();
            },
            unmount: () => {
                const el = document.getElementById(`error-mf-notas`);
                if (el && el.parentNode) el.parentNode.removeChild(el);
                return Promise.resolve();
            }
        })),
    activeWhen: ["/notas"],
});

registerApplication({
    name: "@unisabana/mf-reportes",
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            "@unisabana/mf-reportes"
        ).catch(() => ({
            bootstrap: () => Promise.resolve(),
            mount: () => {
                const el = document.createElement('div');
                el.id = `error-mf-reportes`;
                el.innerHTML = `<div style='padding:2rem;color:red;text-align:center;'>Error: No se pudo cargar el microfrontend <b>@unisabana/mf-reportes</b></div>`;
                let container = document.getElementById('single-spa-application:@unisabana/mf-reportes');
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'single-spa-application:@unisabana/mf-reportes';
                    document.body.appendChild(container);
                }
                container.appendChild(el);
                return Promise.resolve();
            },
            unmount: () => {
                const el = document.getElementById(`error-mf-reportes`);
                if (el && el.parentNode) el.parentNode.removeChild(el);
                return Promise.resolve();
            }
        })),
    activeWhen: ["/reportes"],
});




start({
    urlRerouteOnly: true,
});
