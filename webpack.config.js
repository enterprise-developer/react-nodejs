var path=require("path");
module.exports={
    entry:"./src/main.tsx",
    module:{
        rules:[
            {
                test:/\.tsx$/,
                use:"ts-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    resolve:{
        alias:{
            "@app/common":path.resolve(__dirname, "src/modules/common/index"),
            "@app/layouts/default":path.resolve(__dirname, "src/layouts/default/index"),
            "@app/ui":path.resolve(__dirname, "src/modules/ui/index")
        },
        extensions:[".tsx", ".ts", ".js", "jsx"]
    },
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};