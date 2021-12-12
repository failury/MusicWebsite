package com.klen.musicweb.dao;

import com.klen.musicweb.entity.SysUser;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Description:
 * @Author: Jianyu Qiu (Kalen)
 * @CreateTime: 2021/11/20
 */

public interface SysUserDao extends JpaRepository<SysUser, Integer> {


}
