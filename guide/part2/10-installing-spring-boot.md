# 安装

Spring Boot 可以与“经典” Java 开发工具一起使用，也可以作为命令行工具安装。无论哪种方式，您都需要 Java SDK v1.8 或更高版本。在开始之前，您应该使用以下命令检查当前的 Java 安装版本：

```
$ java -version
```
如果您不熟悉 Java 开发，或者仅仅是想要体验 Spring Boot ，则可能需要先尝试 [Spring Boot CLI](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/html/getting-started-installing-spring-boot.html#getting-started-installing-the-cli)（命令行工具）。否则，请继续阅读下面的安装说明。

## Java 开发者安装指引
你可以按照任何标准的 Java 库来使用 Spring Boot，即将你需要的 `spring-boot-*.jar` 文件引入到你的类路径。 
Spring Boot 不需要任何其他特定的集成工具，所以你可以使用任何的 IDE 或者文本编辑器。而且，Spring Boot 应用也没有任何特殊之处，所以你可以按照
普通的 Java 应用程序来运行或者调试。

虽然你可以将 Spring Boot 需要的 Jar 拷贝到类路径，然而我们一般还是推荐你使用支持依赖管理的构建工具（如Maven、Gradle）。

### Maven 方式安装
Spring Boot 兼容 Apache Maven 3.3 或以上版本。如果你还没有安装 Maven，你可以按照[官方指引](https://maven.apache.org/)来安装。

::: tip
在很多操作系统上，Maven 可以使用安装包来安装。如果你使用的是 OSX Homebrew 系统，执行命令：`brew install maven`。Ubuntu 用户可以执行
`sudo apt-get install maven`命令。使用 [Chocolatey](https://chocolatey.org/) 的 Windows 用户可以用管理员权限执行 `choco install maven`命令。 
:::
 
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

::: tip
使用 Spring Boot 时继承 `spring-boot-starter-parent` 是一个好的方式，但这并不是任何时候都是适用的。有时你可能需要继承其他的父 POM 或者你不想使用默认的设置。
这种情况下，请参考 [Section 13.2.2 不使用父 POM](../part3/13-build-systems)
使用 `import` 范围作为替代解决方式。
:::

### Gradle 方式安装
Spring Boot 兼容 Gradle 4.4 或以上版本。如果你还没有安装 Gradle，你可以按照[官方指引](https://gradle.org/)来安装。

使用 `org.springframework.boot` `group` 来声明 Spring Boot 依赖。通常，你的应用依赖一个或多个[“启动器”](/guide/part3/13-build-systems.html)。Spring Boot 提供了一个有用的 [Gradle 插件]()
来简化依赖描述和生成可执行 Jar 包。

::: warning Gradle Wrapper
当你想构建一个项目的时候，Gradle Wrapper 提供了一种友好的方式去“获取” Gradle。它是一个小的脚本和库，你把它放到你的代码里来引导构建进程。详情见[docs.gradle.org/4.2.1/userguide/gradle_wrapper.html](https://docs.gradle.org/4.2.1/userguide/gradle_wrapper.html).
:::

更多使用 Gradle 的说明可查看 Gradle 插件指引文档 [Gradle起步](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/gradle-plugin/reference/html/#getting-started) 章节。

## 安装 Spring Boot CLI
Spring Boot CLI(命令行界面)是一个你能用来快速生成 Spring 原型的命令行工具。它允许你使用 [Groovy](http://groovy-lang.org/) 脚本，这意味着你不需要看太多模板代码就能有一个熟悉的类 Java 的语法。

### 手动安装
你可以从 Spring 软件库中下载 Spring CLI 发行版：
- [spring-boot-cli-2.1.3.RELEASE-bin.zip](https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.1.3.RELEASE/spring-boot-cli-2.1.3.RELEASE-bin.zip)
- [spring-boot-cli-2.1.3.RELEASE-bin.tar.gz](https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.1.3.RELEASE/spring-boot-cli-2.1.3.RELEASE-bin.tar.gz)

最新的 [快照发行版](https://repo.spring.io/snapshot/org/springframework/boot/spring-boot-cli/) 也可以使用。

下载后，请按照解压后文件中的 [INSTALL.txt](https://raw.github.com/spring-projects/spring-boot/v2.1.3.RELEASE/spring-boot-project/spring-boot-cli/src/main/content/INSTALL.txt) 说明进行操作。
总结下来就是，`zip` 文件的 `bin/` 目录下面有一个 `Spring` 脚本(Windows 系统的话是 `Spring.bat` )。当然，你也可以使用 `java -jar` 命令来执行 `.jar` 文件(使用脚本能帮你确定 classpath 是否设置正确)。

### 使用 SDKMAN! 安装
SDKMAN!(软件开发工具包管理器)可用于管理各种二进制 SDK 的多个版本，包括 Groovy 和 Spring boot CLI。获取SDKMAN！从 [sdkman.io](http://sdkman.io/) 安装SDKMAN!，然后使用下面的命令来安装 Spring Boot：
````
$ sdk install springboot
$ spring --version
Spring Boot v2.1.3.RELEASE
````

 如果您想为 CLI 开发功能并希望能轻松访问构建的版本，请使用以下命令： 
````
$ sdk install springboot dev /path/to/spring-boot/spring-boot-cli/target/spring-boot-cli-2.1.3.RELEASE-bin/spring-2.1.3.RELEASE/
$ sdk default springboot dev
$ spring --version
Spring CLI v2.1.3.RELEASE
````
上面的命令安装了一个名为 `dev` 的 `spring` 本地实例。它指向你的目标构建路径，所以每次当你构建 Spring Boot，`spring` 实例都会更新到最新。

可以通过以下命令查看：
````
$ sdk ls springboot

================================================================================
Available Springboot Versions
================================================================================
> + dev
* 2.1.3.RELEASE

================================================================================
+ - local version
* - installed
> - currently in use
================================================================================
````

### 使用 OSX Homebrew 安装
如果你正在 Mac 电脑上使用 [Homebrew](https://brew.sh/)，你可以通过下面的命令来安装 Spring Boot CLI：
````
$ brew tap pivotal/tap
$ brew install springboot
````
Homebrew 会将 `spring` 安装到 `/usr/local/bin`目录下。

::: tip
如果执行过上述命令后你没有看到相应的程序，你安装的 brew 可能已经过时了，请执行 `brew update` 脚本更新后再重试。
:::

### 使用 MacPorts 安装
如果你正在 Mac 电脑上使用 [MacPorts](https://www.macports.org/)，你可以通过下面的命令来安装 Spring Boot CLI：
````
$ sudo port install spring-boot-cli
````

###  命令补全
Spring Boot CLI 包含为 [BASH](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) 和 [zsh](https://en.wikipedia.org/wiki/Z_shell) 提供命令补全的脚本。
您可以在任何shell中 `source` 脚本(也称为 `spring`)，或者将其放入个人或系统范围的 bash 补全初始化中。
在 Debian 系统下，系统范围的脚本在 `/shell-completion/bash` 目录，在这个文件夹下的所有脚本在一个新的 shell 启动时都会被执行。
例如，如果你是通过 SDKMAN! 安装过 CLI，可以通过下面的命令执行脚本：
````
$ . ~/.sdkman/candidates/springboot/current/shell-completion/bash/spring
$ spring <HIT TAB HERE>
  grab  help  jar  run  test  version
````

::: tip
如果你是通过 Homebrew 或者 MacPorts 安装的，命令补全脚本已经自动注册到你的 shell 了。
:::

### Windows Scoop 安装
如果你正在 Windows 电脑上使用 [Scoop](http://scoop.sh/)，你可以通过下面的命令来安装 Spring Boot CLI：
````
> scoop bucket add extras
> scoop install springboot
````
Scoop 把 `spring` 安装到 `~/scoop/apps/springboot/current/bin` 目录下。

::: tip
如果你没有看到这些程序清单，你安装的 scoop 可能已经过时了，这种情况下，请执行 `scoop update` 命令更新。
:::

### Spring Boot CLI 快速开始示例
你可以通过下面的 Web 应用来测试你的安装情况。首先，创建一个文件名为 `app.groovy`，内容如下：
````
@RestController
class ThisWillActuallyRun {

	@RequestMapping("/")
	String home() {
		"Hello World!"
	}

}
````
然后在 shell 下执行下面的命令：
````
$ spring run app.groovy
````
::: tip
第一次启动会比较慢，因为会下载依赖包。以后再启动就会快很多。
:::

然后，在浏览器打开 [localhost:8080](http://localhost:8080/)，你应该能看到下面的输出：
````
Hello World!
````

## 从旧版本更新
如果你想从旧版本的 Spring Boot 更新，请查看项目 Wiki 的 [迁移指引](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide)，它提供了详细的升级指引。
另外请查看 [“发行说明”](https://github.com/spring-projects/spring-boot/wiki) 以获取每个发行版的“新的和值得注意的”功能列表。

当升级到新功能版本时，某些属性可能已被重命名或删除。Spring Boot 提供了一种在启动时分析应用程序环境和打印诊断的方法，还可以在运行时临时迁移属性。要启用该功能，请将以下依赖项添加到项目中：
````
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-properties-migrator</artifactId>
	<scope>runtime</scope>
</dependency>
````

::: tip
在环境中添加的属性（例如使用@PropertySource时）将不会被考虑在内。
:::

::: tip
完成迁移后，请确保从项目的依赖项中删除此模块。
:::

要升级现有 CLI 安装，请使用相应的软件包管理器命令（例如，`brew upgrade`），或者，如果是手动安装的 CLI，请按照 [标准说明](https://docs.spring.io/spring-boot/docs/2.1.3.RELEASE/reference/html/getting-started-installing-spring-boot.html#getting-started-manual-cli-installation) 操作，
记住更新 `PATH` 环境变量以删除任何旧引用。