
const app = Vue.createApp({
    data() {
        return {
            opperator: ['/', '-', '*', '=', '+'],
            opperands: [],
            message: "Invalid Expression",
            isValid: false

        }
    },
    methods: {
        clear() {
            this.opperands = []
        },
        print(n) {
            if (n == '=') {
                let result = eval(this.opperands.join(''));

                this.opperands = [];

                this.opperands.push(result)
            } else {

                if (this.opperands.length > 0) {
                    let lastEl = this.opperands[this.opperands.length - 1];
                    if (this.opperator.includes(lastEl) && this.opperator.includes(n)) {
                        this.isValid = true;
                    } else {
                        this.opperands.push(n)
                    }

                } else {

                    this.opperands.push(n)
                }
            }

        }
    },
    computed: {
        display() {
            return this.opperands.join("");
        }
    }
})