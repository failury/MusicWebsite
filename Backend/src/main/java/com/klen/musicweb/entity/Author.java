package com.klen.musicweb.entity;

import lombok.Data;

import java.util.Date;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
public class Author {
    private Integer id;

    private String name;

    private Byte sex;

    private String pic;

    private Date birth;

    private String introduction;

    //Join table, subscriber
}
