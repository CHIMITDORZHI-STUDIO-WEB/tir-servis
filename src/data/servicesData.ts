export interface ServiceData {
    id: string;
    categoryKey: string;
    titleKey: string;
    descKey: string;
    scopeKeys: string[];
    advKeys: string[];
}

export const services: Record<string, ServiceData> = {
    // Грузовики
    "computer-diagnostics": {
        id: "computer-diagnostics",
        categoryKey: "srvcat.trucks",
        titleKey: "srv.cd.title",
        descKey: "srv.cd.desc",
        scopeKeys: [
            "srv.cd.s1", "srv.cd.s2", "srv.cd.s3", "srv.cd.s4", "srv.cd.s5", "srv.cd.s6"
        ],
        advKeys: [
            "srv.cd.a1", "srv.cd.a2", "srv.cd.a3", "srv.cd.a4"
        ]
    },
    "engine-repair": {
        id: "engine-repair",
        categoryKey: "srvcat.trucks",
        titleKey: "srv.er.title",
        descKey: "srv.er.desc",
        scopeKeys: [
            "srv.er.s1", "srv.er.s2", "srv.er.s3", "srv.er.s4", "srv.er.s5", "srv.er.s6"
        ],
        advKeys: [
            "srv.er.a1", "srv.er.a2", "srv.er.a3", "srv.er.a4"
        ]
    },
    "chassis-repair": {
        id: "chassis-repair",
        categoryKey: "srvcat.trucks",
        titleKey: "srv.cr.title",
        descKey: "srv.cr.desc",
        scopeKeys: [
            "srv.cr.s1", "srv.cr.s2", "srv.cr.s3", "srv.cr.s4"
        ],
        advKeys: [
            "srv.cr.a1", "srv.cr.a2", "srv.cr.a3"
        ]
    },
    "brakes-system": {
        id: "brakes-system",
        categoryKey: "srvcat.trucks",
        titleKey: "srv.br.title",
        descKey: "srv.br.desc",
        scopeKeys: [
            "srv.br.s1", "srv.br.s2", "srv.br.s3", "srv.br.s4"
        ],
        advKeys: [
            "srv.br.a1", "srv.br.a2", "srv.br.a3"
        ]
    },
    "electrics": {
        id: "electrics",
        categoryKey: "srvcat.trucks",
        titleKey: "srv.el.title",
        descKey: "srv.el.desc",
        scopeKeys: [
            "srv.el.s1", "srv.el.s2", "srv.el.s3", "srv.el.s4"
        ],
        advKeys: [
            "srv.el.a1", "srv.el.a2", "srv.el.a3"
        ]
    },

    // Прочие услуги
    "gearbox": {
        id: "gearbox",
        categoryKey: "srvcat.other",
        titleKey: "srv.gb.title",
        descKey: "srv.gb.desc",
        scopeKeys: ["srv.gb.s1", "srv.gb.s2", "srv.gb.s3", "srv.gb.s4"],
        advKeys: ["srv.cr.a1", "srv.cr.a2", "srv.cr.a3"]
    },
    "pneumatics": {
        id: "pneumatics",
        categoryKey: "srvcat.other",
        titleKey: "srv.pn.title",
        descKey: "srv.pn.desc",
        scopeKeys: ["srv.pn.s1", "srv.pn.s2", "srv.pn.s3", "srv.pn.s4"],
        advKeys: ["srv.cr.a1", "srv.cr.a2", "srv.cr.a3"]
    },
    "service-checks": {
        id: "service-checks",
        categoryKey: "srvcat.other",
        titleKey: "srv.sc.title",
        descKey: "srv.sc.desc",
        scopeKeys: ["srv.sc.s1", "srv.sc.s2", "srv.sc.s3", "srv.sc.s4"],
        advKeys: ["srv.cr.a1", "srv.cr.a2", "srv.cr.a3"]
    },
    "buses": {
        id: "buses",
        categoryKey: "srvcat.other",
        titleKey: "srv.bs.title",
        descKey: "srv.bs.desc",
        scopeKeys: ["srv.bs.s1", "srv.bs.s2", "srv.bs.s3", "srv.bs.s4"],
        advKeys: ["srv.cr.a1", "srv.cr.a2", "srv.cr.a3"]
    },
    "agri": {
        id: "agri",
        categoryKey: "srvcat.other",
        titleKey: "srv.ag.title",
        descKey: "srv.ag.desc",
        scopeKeys: ["srv.ag.s1", "srv.ag.s2", "srv.ag.s3", "srv.ag.s4"],
        advKeys: ["srv.cr.a1", "srv.cr.a2", "srv.cr.a3"]
    },
    "parts": {
        id: "parts",
        categoryKey: "srvcat.other",
        titleKey: "srv.pt.title",
        descKey: "srv.pt.desc",
        scopeKeys: ["srv.pt.s1", "srv.pt.s2", "srv.pt.s3", "srv.pt.s4"],
        advKeys: ["srv.pt.a1", "srv.pt.a2", "srv.pt.a3"]
    }
};
