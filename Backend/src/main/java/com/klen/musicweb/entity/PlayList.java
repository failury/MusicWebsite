package com.klen.musicweb.entity;

import lombok.Data;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
public class PlayList {
    private Integer id;

    private String title;

    private String pic;

    private String style;

    private String introduction;
}
