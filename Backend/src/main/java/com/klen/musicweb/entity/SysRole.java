package com.klen.musicweb.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

/**
 * @Description:
 * @Author: klenq
 * @CreateTime: 2021/11/14
 */
@Entity
@Data
@Table(name = "role")
public class SysRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column
    private String code;
    @Column
    private String name;
    @Column
    private String sort;//排序
    @JoinTable(name = "m_role_permission",
            joinColumns = @JoinColumn(name = "r_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            inverseJoinColumns = @JoinColumn(name = "p_id", foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT)),
            uniqueConstraints = @UniqueConstraint(columnNames = {"r_id", "p_id"}))
    @ManyToMany
    @OrderBy("id asc")
    private List<SysPermission> permissions;

}
