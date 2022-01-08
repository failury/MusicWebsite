package com.klen.musicweb.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 2021/11/14
 */
@Entity
@Data
@Table(name = "user")
public class SysUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true, nullable = false)
    private String username;
    @Column
    private String password;
    @Column
    private String nickname;
    @Column
    private Byte sex;
    @Column
    private String phoneNum;
    @Column
    private String email;
    @Column
    private Date birth;
    @Column
    private String introduction;
    @Column
    private String location;

    //TODO
    private Date createTime;
    //TODO
    private Date updateTime;
    //TODO
    private String avatar;

    @JoinTable(name = "m_user_role",
            joinColumns = @JoinColumn(name = "u_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            inverseJoinColumns = @JoinColumn(name = "r_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            uniqueConstraints = @UniqueConstraint(columnNames = {"u_id", "r_id"}))
    @ManyToMany
    @OrderBy("id asc")
    private List<SysRole> roles;

}
