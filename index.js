class Parent {
    constructor() {
    }
}

class Child extends Parent {
    constructor() {
        super();
    }

    scopedFunctionWithThis = () => {
        this.name = {};
    }
}
new Child();