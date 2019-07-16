import _ from 'lodash'

class Task {
    execQueue = [];
    isBootstraped = false;
    pause = false;
    consumptionLevel = {
        min: 0,
        max: 1
    };
    constructor () {}
    /**
     * 通过 task 来执行任务
     * @param task 需要被计划的任务，类型：函数
     * @param options 设置任务优先级等
     */
    exec (task, options = { level: this.consumptionLevel.max }) {
        if (!_.isFunction(task)) {
            return
        }
        if (this.isBootstraped) {
            if (options.level === this.consumptionLevel.min) {
                task()
            } else {
                this.execQueue.push(task)
                // 如果任务长度为 1 ，则启动任务。
                // 否则表示正在执行中，task 会自动执行下一个。
                if (this.execQueue.length === 1) {
                    this.runRAF()
                }
            }
        } else {
            this.execQueue.push(task)
        }
    }
    runRAF () {
        // 暂停，队列为空，或者已经正在执行了，都直接返回；
        if (this.pause || !this.execQueue.length) {
            return
        }
        window.requestAnimationFrame(() => {
            // 多次检测。外部时序问题，调用了多次 runRAF;
            if (this.execQueue.length) {
                const task = this.execQueue.shift()
                if (this.execQueue.length) {
                    this.runRAF()
                }
                task()
            }
        })
    }
    /**
     * “任务管理器”启动
     */
    bootstrap () {
        this.isBootstraped = true
        this.runRAF()
    }
    /**
     * “任务管理器”停止当前的执行任务（除了已经在执行的一个之外）
     */
    stop () {
        this.pause = true
    }
    /**
     * “任务管理器”当前是否处于停止状态
     */
    isStop () {
        return this.pause
    }
    /**
     * “任务管理器”从停止状态中恢复
     */
    resume () {
        this.pause = false
        this.runRAF()
    }
}

export default new Task()
