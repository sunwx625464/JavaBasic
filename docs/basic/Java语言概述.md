# Java语言概述

## Java语言的特点

- 简单性

Java剔除了C++中许多很少使用，难以理解、容易混淆的概念。例如：头文件、指针、操作符重载、虚基类、多继承

- 面向对象
- 分布式
- 健壮性

Java的编译器能够检测出许多其他语言在运行时才能够检测出来的问题。Java强调进行早期的问题检测、后期动态的（运行时）检测，以及消除容易出错的情况。

- 安全性

  从一开始，Java就设计成能够防范各种攻击，其中包括： - 运行时堆栈溢出，这是蠕虫和病毒常用的攻击手段 - 破坏自己的进程空间之外的内存 - 未经授权读写文件

- 体系结构中立

- 可移植性

- 解释型

- 高性能

- 多线程

- 动态性

## Java虚拟机与字节码

- 字节码：Java编译器生成的计算机体系结构中立的代码。
- Java虚拟机：也叫jvm，是运行Java字节码文件的虚拟机。

> 字节码和Java虚拟机是实现“一次编写，到处运行”的关键。

## JDK、JRE

- JDK是Java开发工具包，提供给开发者使用，用于创建和编译Java程序，它包含了JRE，以及编译器javac和其他工具。
- JRE是Java运行时环境，它包含JVM和Java基础类库。

## Java程序的基本结构与运行方式

```java
public class FirstSample{
  public static void main(String[] args){
    System.out.println("We will not use 'Hello,World'");
  }
}

// java区分大小写。
```

- 关键字public称为访问修饰符，这些修饰符用来控制程序的其他部分对这段代码的访问级别。
- 关键字class用来声明一个类，Java程序的所有内容都包含在这个类中。class后边是类名。
- main方法，Java虚拟机总是从指定类中的main方法开始执行。在Java中，main方法必须声明为publie。
- {  } 称为代码块。表示开始与结束。

## 使用命令行编译与运行

```java
javac Welcome.java // 编译
java Welcome // 运行
```

## 注释

源文件中用于解释、说明程序的文字就是注释。Java中注释有三种类型：

```java
// 单行注释

/*
* 多行注释
*/

/**
* 文档注释，Java特有
* @author 作者
* @version 版本
*/
```

> 文档注释内容可以被JDK提供的工具javadoc解析，生成一套以网页文件形式体现的该程序的说明文档
>
> 操作方式:
>
> javadoc -d mydoc -author -version HelloWorld.java
