package com.klen.musicweb.entity;

import lombok.Data;

import javax.persistence.*;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 2021/11/14
 */
@Entity
@Data
@Table(name = "permission")
public class SysPermission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String name;
    @Column
    private String code;

}
