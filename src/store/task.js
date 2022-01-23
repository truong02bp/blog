export const task = {
    state: {
        tasks: []
    },
    getters: {
        tasks: state => state.tasks,
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push({"task": task, "done": false});
        }
    },
    actions: {
        addTask({commit}, task) {
            console.log(task);
            commit("addTask", task);
        }
    }
}