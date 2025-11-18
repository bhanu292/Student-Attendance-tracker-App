const Store = {
    state: {
        users: JSON.parse(localStorage.getItem("users")) || {
            teacher: { username: "teacher1", password: "12345" } ,
            students: { username: "student1", password: "12345" } 
        },

        classes: JSON.parse(localStorage.getItem("classes")) || [],
        students: JSON.parse(localStorage.getItem("students")) || [],
        attendance: JSON.parse(localStorage.getItem("attendance")) || [],
        currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    },

    save() {
        localStorage.setItem("users", JSON.stringify(this.state.users));
        localStorage.setItem("classes", JSON.stringify(this.state.classes));
        localStorage.setItem("students", JSON.stringify(this.state.students));
        localStorage.setItem("attendance", JSON.stringify(this.state.attendance));
        localStorage.setItem("currentUser", JSON.stringify(this.state.currentUser));
    }
};
