package com.klen.musicweb.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
@Entity
@Table(name = "music")
public class Music {
    @Id
    private Integer id;
    @Column
    private Integer singerId;
    @Column
    private String name;
    @Column
    private String introduction;
    @Column
    private String pic;
    @Column
    private String lyric;
    @Column
    private String url;
    @Column
    private Date createTime;
    @Column
    private Date updateTime;
}
