package com.klen.musicweb.entity;

import lombok.Data;

import java.util.Date;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
public class Music {
    private Integer id;

    private Integer singerId;

    private String name;

    private String introduction;

    private String pic;

    private String lyric;

    private String url;

    private Date createTime;

    private Date updateTime;
}
