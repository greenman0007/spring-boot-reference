# 安装

Spring Boot 可以与“经典” Java 开发工具一起使用，也可以作为命令行工具安装。无论哪种方式，您都需要 Java SDK v1.8 或更高版本。在开始之前，您应该使用以下命令检查当前的 Java 安装版本：

```
$ java -version
```
如果您不熟悉 Java 开发，或者仅仅是想要体验 Spring Boot ，则可能需要先尝试 [Spring Boot CLI](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/html/getting-started-installing-spring-boot.html#getting-started-installing-the-cli)（命令行工具）。否则，请继续阅读“经典”安装说明。

## Java 开发者安装指引
你可以按照任何标准的 Java 库来使用 Spring Boot，即将你需要的 `spring-boot-*.jar` 文件引入到你的类路径。 
Spring Boot 不需要任何其他特定的集成工具，所以你可以使用任何的 IDE 或者文本编辑器。而且，Spring Boot 应用也没有任何特殊之处，所以你可以按照
普通的 Java 应用程序来运行或者调试。

虽然你可以将 Spring Boot 需要的 Jar 拷贝到类路径，然而我们一般还是推荐你使用支持依赖管理的构建工具（如Maven、Gradle）。

### Maven 方式安装
Spring Boot 兼容 Apache Maven 3.3 或以上版本。如果你还没有安装 Maven，你可以按照[官方指引](https://maven.apache.org/)来安装。

> 在很多操作系统上，Maven 可以使用安装包来安装。如果你使用的是 OSX Homebrew 系统，执行命令：`brew install maven`。Ubuntu 用户可以执行
  `sudo apt-get install maven`命令。使用 [Chocolatey](https://chocolatey.org/) 的 Windows 用户可以用管理员权限执行 `choco install maven`命令。
  
Spring Boot 的 `groupId` 为 `org.springframework.boot`。通常，你的 Maven POM 文件继承自 `spring-boot-starter-parent` 项目，并且声明依赖一个或多个 [Starters](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/html/using-boot-build-systems.html#using-boot-starter)。
Spring Boot 同时也提供了一个可选的 [Maven 插件](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/html/build-tool-plugins-maven-plugin.html) 来创建可执行 Jar。

下面是一个典型的 `pom.xml` 文件：

```
<?xml version="1.0" encoding="UTF-8"?>
 <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 	<modelVersion>4.0.0</modelVersion>
 
 	<groupId>com.example</groupId>
 	<artifactId>myproject</artifactId>
 	<version>0.0.1-SNAPSHOT</version>
 
 	<!-- Inherit defaults from Spring Boot -->
 	<parent>
 		<groupId>org.springframework.boot</groupId>
 		<artifactId>spring-boot-starter-parent</artifactId>
 		<version>2.1.3.RELEASE</version>
 	</parent>
 
 	<!-- Add typical dependencies for a web application -->
 	<dependencies>
 		<dependency>
 			<groupId>org.springframework.boot</groupId>
 			<artifactId>spring-boot-starter-web</artifactId>
 		</dependency>
 	</dependencies>
 
 	<!-- Package as an executable jar -->
 	<build>
 		<plugins>
 			<plugin>
 				<groupId>org.springframework.boot</groupId>
 				<artifactId>spring-boot-maven-plugin</artifactId>
 			</plugin>
 		</plugins>
 	</build>
 	
 </project>
 
```

> 使用 Spring Boot 时继承 `spring-boot-starter-parent` 是一个好的方式，但这并不是任何时候都是适用的。有时你可能需要继承其他的父 POM 或者你不想使用默认的设置。
这种情况下，请参考 [Section 13.2.2 不使用父 POM](../part3/13-build-systems)
使用 `import` 范围作为替代解决方式。

### Gradle 方式安装
Spring Boot 兼容 Gradle 4.4 或以上版本。如果你还没有安装 Gradle，你可以按照[官方指引](https://gradle.org/)来安装。


