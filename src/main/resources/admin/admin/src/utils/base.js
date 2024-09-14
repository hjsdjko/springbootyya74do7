const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootyya74do7/",
            name: "springbootyya74do7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootyya74do7/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的停车场管理系统"
        } 
    }
}
export default base
