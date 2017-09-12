
### 多级模板示例
<br/>
（根据vue-cli做更改）

<br/><br/><br/>
假如 你的项目 有两套不同的模板
<br/><br/>
#### 开发命令：<br/>
   npm run dev_mod1 (2)  

#### 生成命令：<br/>
   npm run prod_mod1 (2)  

#### package.json 配置

  
        ...
        "scripts": {
                运行命令
                模板一
              "dev_mod1": "node dev/mod1.js",  
              "prod_mod1": "node prod/mod1.js",
    
               模板二
              "dev_mod2": "node dev/mod2.js",
              "prod_mod2": "node prod/mod2.js",
              ...
              ...
         }
        ...
