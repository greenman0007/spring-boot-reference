module.exports = {
    title: 'spring-boot-reference-2.1.3.RELEASE 中文文档',  // 设置网站标题
    description: 'spring-boot-reference-2.1.3.RELEASE 中文文档',
    port: "3000",
    dest: "docs",
    base: '/',
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    themeConfig: {
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        locales: {
            "/": {
                lang: "zh-CN",
                title: "Spring Boot Reference Guide",
                description: "2.1.3.RELEASE"
            }
        },
        nav: [
            {text: '接口定义', link: '/apiword'},
            {text: '接口字段定义', link: '/api'},
            {text: '附录：错误码', link: '/error'}
        ],
        sidebar: {
            '/guide/': [
                {
                    title: "简介",
                    collapsable: false,
                    children: ['', 'part1/1-about-the-documentation', 'part1/2-getting-help', 'part1/3-first-steps', 'part1/4-working-with-spring boot', 'part1/5-learning-about-spring-boot-features', 'part1/6-moving-to-production', 'part1/7-advanced-topics']
                },
                {
                    title: "起步",
                    collapsable: false,
                    children: ['part2/8-introducing-spring-boot', 'part2/9-system-requirements', 'part2/10-installing-spring-boot', 'part2/11-developing-your-first-spring-boot-application']
                },
                {
                    title: "使用",
                    collapsable: false,
                    children: ['part3/13-build-systems', 'part3/14-structuring-your-code', 'part3/15-configuration-classes', 'part3/16-auto-configuration', 'part3/17-spring-beans-and-dependency-injection', 'part3/18-using-the-springbootapplication-annotation', 'part3/19-running-your-application', 'part3/20-developer-tools', 'part3/21-packaging-your-application-for-production']
                },
                {
                    title: "功能",
                    collapsable: false,
                    children: ['part4/23-springapplication.md', 'part4/24-externalized-configuration.md', 'part4/25-profiles.md', 'part4/26-logging.md', 'part4/27-internationalization.md', 'part4/28-json.md', 'part4/29-developing-web-applications.md', 'part4/30-security.md', 'part4/31-working-with-sql-databases.md', 'part4/32-working-with-nosql-technologies.md', 'part4/33-caching.md', 'part4/34-messaging.md', 'part4/35-calling-rest-services-with-resttemplate.md', 'part4/36-calling-rest-services-with-webclient.md', 'part4/37-validation.md', 'part4/38-sending-email.md', 'part4/39-distributed-transactions-with-jta.md', 'part4/40-hazelcast.md', 'part4/41-quartz-scheduler.md', 'part4/42-task-execution-and-scheduling.md', 'part4/43-spring-integration.md', 'part4/44-spring-session.md', 'part4/45-monitoring-and-management-over-jmx.md', 'part4/46-testing.md', 'part4/47-websockets.md', 'part4/48-web-services.md', 'part4/49-creating-your-own-auto-configuration.md', 'part4/50-kotlin-support.md']
                },
                {
                    title: "执行器：生产环境特性",
                    collapsable: false,
                    children: ['part5/52-enabling-production-ready-features.md', 'part5/53-endpoints.md', 'part5/54-monitoring-and-management-over-http.md', 'part5/55-monitoring-and-management-over-jmx.md', 'part5/56-loggers.md', 'part5/57-metrics.md', 'part5/58-auditing.md', 'part5/59-http-tracing.md', 'part5/60-process-monitoring.md', 'part5/61-cloud-foundry-support.md']
                },
                {
                    title: "部署应用",
                    collapsable: false,
                    children: ['part6/63-deploying-to-the-cloud.md', 'part6/64-installing-spring-boot-applications.md']
                },
                {
                    title: "命令行工具",
                    collapsable: false,
                    children: ['part7/66-installing-the-cli.md', 'part7/67-using-the-cli.md', 'part7/68-developing-applications-with-the-groovy-beans-dsl.md', 'part7/69-configuring-the-cli-with-settings-xml.md']
                },
                {
                    title: "构建工具插件",
                    collapsable: false,
                    children: ['part8/71-spring-boot-maven-plugin.md', 'part8/72-spring-boot-gradle-plugin.md', 'part8/73-spring-boot-antlib-module.md', 'part8/74-supporting-other-build-systems.md']
                },
                {
                    title: "“如何使用”指引",
                    collapsable: false,
                    children: ['part9/76-spring-boot-application.md', 'part9/77-properties-and-configuration.md', 'part9/78-embedded-web-servers.md', 'part9/79-spring-mvc.md', 'part9/80-testing-with-spring-security.md', 'part9/81-jersey.md', 'part9/82-http-clients.md', 'part9/83-logging.md', 'part9/84-data-access.md', 'part9/85-database-initialization.md', 'part9/86-messaging.md', 'part9/87-batch-applications.md', 'part9/88-actuator.md', 'part9/89-security.md', 'part9/90-hot-swapping.md', 'part9/91-build.md', 'part9/92-traditional-deployment.md']
                },
                {
                    title: "附件",
                    collapsable: false,
                    children: ['part10/appendix-a-common-application-properties.md', 'part10/appendix-b-configuration-metadata.md', 'part10/appendix-c-auto-configuration-classes.md', 'part10/appendix-d-test-auto-configuration-annotations.md', 'part10/appendix-e-the-executable-jar-format.md', 'part10/appendix-f-dependency-versions.md']
                }
            ]
        },
        sidebarDepth: 2
    }
}