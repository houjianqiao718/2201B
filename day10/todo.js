(function (t) {
    function e(e) {
        for (var o, a, u = e[0], s = e[1], i = e[2], d = 0, b = []; d < u.length; d++) a = u[d], Object.prototype.hasOwnProperty.call(c, a) && c[a] && b.push(c[a][0]), c[a] = 0;
        for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]);
        l && l(e);
        while (b.length) b.shift()();
        return r.push.apply(r, i || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], o = !0, u = 1; u < n.length; u++) {
                var s = n[u];
                0 !== c[s] && (o = !1)
            }
            o && (r.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var o = {},
        c = {
            app: 0
        },
        r = [];

    function a(e) {
        if (o[e]) return o[e].exports;
        var n = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = t, a.c = o, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) a.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var i = 0; i < u.length; i++) e(u[i]);
    var l = s;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("cd49")
    },
    "07e3": function (t, e, n) {
        "use strict";
        n("5538")
    },
    "25a7": function (t, e, n) {
        "use strict";
        n("5e3e")
    },
    "364f": function (t, e, n) {},
    5538: function (t, e, n) {},
    "5e3e": function (t, e, n) {},
    "6e4d": function (t, e, n) {
        t.exports = n.p + "img/note.75134fb0.svg"
    },
    7464: function (t, e, n) {
        "use strict";
        n("e35f")
    },
    "79c3": function (t, e, n) {},
    a0ea: function (t, e, n) {
        "use strict";
        n("ba1e")
    },
    ba1e: function (t, e, n) {},
    cac8: function (t, e, n) {
        "use strict";
        n("79c3")
    },
    cd49: function (t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var o, c = n("7a23"),
            r = n("ad3d"),
            a = n("ecee"),
            u = n("c074"),
            s = (n("a4d3"), n("e01a"), n("d3b7"), n("5502")),
            i = n("ade3"),
            l = n("5530");
        n("4de4"), n("d81d");
        (function (t) {
            t["SET_TODOS"] = "SET_TODOS", t["ADD_TODO"] = "ADD_TODO", t["DELETE_TODO"] = "DELETE_TODO", t["CLEAR_COMPLETED"] = "CLEAR_COMPLETED", t["MARK_COMPLETED"] = "MARK_COMPLETED", t["SET_STATUS"] = "SET_STATUS"
        })(o || (o = {}));
        n("e9c4");
        var d, b = {
                TODOS_KEY: "todos"
            },
            f = function (t) {
                localStorage.setItem(b.TODOS_KEY, JSON.stringify(t))
            },
            O = function () {
                return JSON.parse(localStorage.getItem(b.TODOS_KEY) || "[]")
            },
            p = {
                state: {
                    todos: [],
                    status: "all"
                },
                getters: {
                    todos: function (t, e) {
                        switch (t.status) {
                            case "active":
                                return e.activeTodos;
                            case "completed":
                                return e.doneTodos;
                            default:
                                return e.allTodos
                        }
                    },
                    allTodos: function (t) {
                        return t.todos
                    },
                    activeTodos: function (t) {
                        return t.todos.filter((function (t) {
                            return !t.completed
                        }))
                    },
                    doneTodos: function (t) {
                        return t.todos.filter((function (t) {
                            return t.completed
                        }))
                    }
                },
                mutations: (d = {}, Object(i["a"])(d, o.SET_TODOS, (function (t) {
                    t.todos = O()
                })), Object(i["a"])(d, o.ADD_TODO, (function (t, e) {
                    t.todos.unshift(e), f(t.todos)
                })), Object(i["a"])(d, o.DELETE_TODO, (function (t, e) {
                    t.todos = t.todos.filter((function (t) {
                        return t.id !== e
                    })), f(t.todos)
                })), Object(i["a"])(d, o.CLEAR_COMPLETED, (function (t) {
                    t.todos = t.todos.filter((function (t) {
                        return !t.completed
                    })), f(t.todos)
                })), Object(i["a"])(d, o.MARK_COMPLETED, (function (t, e) {
                    t.todos = t.todos.map((function (t) {
                        return Object(l["a"])(Object(l["a"])({}, t), {}, {
                            completed: t.id === e ? !t.completed : t.completed
                        })
                    })), f(t.todos)
                })), Object(i["a"])(d, o.SET_STATUS, (function (t, e) {
                    t.status = e
                })), d)
            },
            j = p,
            m = (Symbol(), Object(s["a"])({
                modules: {
                    todos: j
                }
            })),
            T = m;

        function v(t, e, n, o, r, a) {
            var u = Object(c["t"])("container");
            return Object(c["n"])(), Object(c["d"])(u)
        }
        var h = {
            class: "container"
        };

        function g(t, e, n, o, r, a) {
            var u = Object(c["t"])("heading"),
                s = Object(c["t"])("form-field"),
                i = Object(c["t"])("todos"),
                l = Object(c["t"])("options");
            return Object(c["n"])(), Object(c["f"])("main", h, [Object(c["h"])(u), Object(c["h"])(s), Object(c["h"])(i), Object(c["h"])(l)])
        }
        var S = function (t) {
                return Object(c["p"])("data-v-5f8a7fba"), t = t(), Object(c["o"])(), t
            },
            C = {
                class: "form-field"
            },
            E = S((function () {
                return Object(c["g"])("h1", {
                    class: "title"
                }, "~ Today I need to ~", -1)
            })),
            _ = {
                class: "form-input"
            },
            D = S((function () {
                return Object(c["g"])("button", {
                    type: "submit",
                    class: "submit-btn"
                }, [Object(c["g"])("span", null, "Submit")], -1)
            }));

        function y(t, e, n, o, r, a) {
            return Object(c["n"])(), Object(c["f"])("div", C, [E, Object(c["g"])("form", {
                onSubmit: e[1] || (e[1] = Object(c["y"])((function (t) {
                    return o.handleAddTodo(o.contentRef)
                }), ["prevent"])),
                class: "form-wrapper"
            }, [Object(c["g"])("div", _, [Object(c["x"])(Object(c["g"])("input", {
                ref: "inputRef",
                placeholder: "Add new todo...",
                "onUpdate:modelValue": e[0] || (e[0] = function (t) {
                    return o.contentRef = t
                }),
                autofocus: ""
            }, null, 512), [
                [c["v"], o.contentRef, void 0, {
                    trim: !0
                }]
            ])]), D], 32)])
        }
        var k = n("e1bd"),
            A = {
                name: "FormInput",
                setup: function () {
                    var t = Object(s["b"])(),
                        e = Object(c["r"])(""),
                        n = Object(c["r"])(null),
                        r = function (c) {
                            n.value.focus(), c && (t.commit(o.ADD_TODO, {
                                id: Object(k["a"])(),
                                content: c,
                                completed: !1
                            }), t.commit(o.SET_STATUS, "all"), e.value = "")
                        };
                    return {
                        contentRef: e,
                        inputRef: n,
                        handleAddTodo: r
                    }
                }
            },
            M = (n("7464"), n("6b0d")),
            w = n.n(M);
        const L = w()(A, [
            ["render", y],
            ["__scopeId", "data-v-5f8a7fba"]
        ]);
        var P = L,
            R = n("6e4d"),
            x = n.n(R),
            I = function (t) {
                return Object(c["p"])("data-v-73841b6c"), t = t(), Object(c["o"])(), t
            },
            U = {
                class: "heading"
            },
            K = I((function () {
                return Object(c["g"])("div", {
                    class: "img-wrapper"
                }, [Object(c["g"])("img", {
                    src: x.a,
                    alt: "Note"
                })], -1)
            })),
            J = I((function () {
                return Object(c["g"])("div", {
                    class: "title"
                }, "To-Do List", -1)
            })),
            F = [K, J];

        function N(t, e, n, o, r, a) {
            return Object(c["n"])(), Object(c["f"])("header", U, F)
        }
        var Y = {
            name: "Heading"
        };
        n("e7e4");
        const H = w()(Y, [
            ["render", N],
            ["__scopeId", "data-v-73841b6c"]
        ]);
        var V = H,
            q = {
                key: 0,
                class: "options"
            },
            z = {
                class: "filters"
            };

        function B(t, e, n, o, r, a) {
            return o.allTodosCount > 0 ? (Object(c["n"])(), Object(c["f"])("footer", q, [Object(c["g"])("span", null, Object(c["u"])(o.activeTodosCount) + " item left", 1), Object(c["g"])("div", z, [Object(c["g"])("span", {
                class: Object(c["l"])(["option", "all" === o.status && "active"]),
                onClick: e[0] || (e[0] = function (t) {
                    return o.handleSetStatus("all")
                })
            }, "All", 2), o.activeTodosCount > 0 && o.doneTodosCount > 0 ? (Object(c["n"])(), Object(c["f"])("span", {
                key: 0,
                class: Object(c["l"])(["option", "active" === o.status && "active"]),
                onClick: e[1] || (e[1] = function (t) {
                    return o.handleSetStatus("active")
                })
            }, "Active", 2)) : Object(c["e"])("", !0), o.doneTodosCount > 0 && o.activeTodosCount > 0 ? (Object(c["n"])(), Object(c["f"])("span", {
                key: 1,
                class: Object(c["l"])(["option", "completed" === o.status && "active"]),
                onClick: e[2] || (e[2] = function (t) {
                    return o.handleSetStatus("completed")
                })
            }, "Completed", 2)) : Object(c["e"])("", !0)]), o.doneTodosCount > 0 ? (Object(c["n"])(), Object(c["f"])("span", {
                key: 0,
                class: "option",
                onClick: e[3] || (e[3] = function () {
                    return o.handleClearCompleted && o.handleClearCompleted.apply(o, arguments)
                })
            }, "Clear completed")) : Object(c["e"])("", !0)])) : Object(c["e"])("", !0)
        }
        var G = {
            name: "Options",
            setup: function () {
                var t = Object(s["b"])(),
                    e = Object(c["b"])((function () {
                        return t.state.todos.status
                    })),
                    n = Object(c["b"])((function () {
                        return t.getters.activeTodos.length
                    })),
                    r = Object(c["b"])((function () {
                        return t.getters.doneTodos.length
                    })),
                    a = Object(c["b"])((function () {
                        return t.getters.allTodos.length
                    })),
                    u = function (e) {
                        t.commit(o.SET_STATUS, e)
                    },
                    i = function () {
                        t.commit(o.CLEAR_COMPLETED), t.commit(o.SET_STATUS, "all")
                    };
                return {
                    status: e,
                    allTodosCount: a,
                    activeTodosCount: n,
                    doneTodosCount: r,
                    handleSetStatus: u,
                    handleClearCompleted: i
                }
            }
        };
        n("07e3");
        const Q = w()(G, [
            ["render", B],
            ["__scopeId", "data-v-975e0b72"]
        ]);
        var W = Q,
            X = function (t) {
                return Object(c["p"])("data-v-132cabf7"), t = t(), Object(c["o"])(), t
            },
            Z = {
                key: 0,
                class: "todos"
            },
            $ = ["onClick"],
            tt = ["onClick"],
            et = X((function () {
                return Object(c["g"])("div", {
                    class: "checkbox"
                }, null, -1)
            })),
            nt = [et],
            ot = {
                class: "content"
            },
            ct = ["onClick"],
            rt = {
                key: 1,
                class: "empty-todos"
            },
            at = X((function () {
                return Object(c["g"])("span", {
                    class: "msg"
                }, "Congrat, you have no more tasks to do", -1)
            }));

        function ut(t, e, n, o, r, a) {
            var u = Object(c["t"])("font-awesome-icon");
            return o.todos.length > 0 ? (Object(c["n"])(), Object(c["f"])("ul", Z, [(Object(c["n"])(!0), Object(c["f"])(c["a"], null, Object(c["s"])(o.todos, (function (t) {
                return Object(c["n"])(), Object(c["f"])("li", {
                    class: Object(c["l"])(["todos-item", {
                        completed: t.completed
                    }]),
                    key: t.id
                }, [t.completed ? (Object(c["n"])(), Object(c["f"])("button", {
                    key: 0,
                    class: "check-btn",
                    onClick: function (e) {
                        return o.handleMarkCompleted(t.id)
                    }
                }, [Object(c["h"])(u, {
                    icon: "check",
                    class: "check"
                })], 8, $)) : (Object(c["n"])(), Object(c["f"])("button", {
                    key: 1,
                    class: "checkbox-btn",
                    onClick: function (e) {
                        return o.handleMarkCompleted(t.id)
                    }
                }, nt, 8, tt)), Object(c["g"])("p", ot, Object(c["u"])(t.content), 1), Object(c["g"])("button", {
                    class: "close-btn",
                    onClick: function (e) {
                        return o.handleDeleteTodo(t.id)
                    }
                }, [Object(c["h"])(u, {
                    icon: "times",
                    class: "close"
                })], 8, ct)], 2)
            })), 128))])) : 0 === o.allTodos.length ? (Object(c["n"])(), Object(c["f"])("div", rt, [Object(c["h"])(u, {
                icon: "clipboard-check",
                class: "icon"
            }), at])) : Object(c["e"])("", !0)
        }
        var st = {
            name: "Todos",
            setup: function () {
                var t = Object(s["b"])(),
                    e = Object(c["b"])((function () {
                        return t.getters.todos
                    })),
                    n = Object(c["b"])((function () {
                        return t.getters.allTodos
                    })),
                    r = Object(c["b"])((function () {
                        return t.getters.doneTodos
                    })),
                    a = function (e) {
                        t.commit(o.MARK_COMPLETED, e)
                    },
                    u = function (e) {
                        t.commit(o.DELETE_TODO, e)
                    };
                return Object(c["m"])((function () {
                    t.commit(o.SET_TODOS)
                })), Object(c["w"])(r, (function () {
                    0 === r.value.length && t.commit(o.SET_STATUS, "all")
                })), {
                    todos: e,
                    allTodos: n,
                    handleMarkCompleted: a,
                    handleDeleteTodo: u
                }
            }
        };
        n("a0ea");
        const it = w()(st, [
            ["render", ut],
            ["__scopeId", "data-v-132cabf7"]
        ]);
        var lt = it,
            dt = {
                components: {
                    Heading: V,
                    FormField: P,
                    Options: W,
                    Todos: lt
                },
                name: "Container"
            };
        n("25a7");
        const bt = w()(dt, [
            ["render", g],
            ["__scopeId", "data-v-167ca4dc"]
        ]);
        var ft = bt,
            Ot = Object(c["i"])({
                name: "App",
                components: {
                    Container: ft
                }
            });
        n("cac8");
        const pt = w()(Ot, [
            ["render", v]
        ]);
        var jt = pt,
            mt = Object(c["c"])(jt);
        a["c"].add(u["d"], u["a"], u["b"], u["c"]), mt.use(T), mt.component("font-awesome-icon", r["a"]), mt.mount("#app")
    },
    e35f: function (t, e, n) {},
    e7e4: function (t, e, n) {
        "use strict";
        n("364f")
    }
});
//# sourceMappingURL=app.4d98724c.js.map