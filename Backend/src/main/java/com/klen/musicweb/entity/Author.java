package com.klen.musicweb.entity;

import lombok.Data;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import java.util.Date;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 12/19/2021
 */
@Data
@Entity
@Table(name = "author")
public class Author {
    @Id
    private Integer id;
    @Column
    private String name;
    @Column
    private Byte sex;
    @Column
    private String pic;
    @Column
    private Date birth;
    @Column
    private String introduction;

    //Join table, with music
    //TODO
}
