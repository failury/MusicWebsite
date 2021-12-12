package com.klen.musicweb.service;


import com.klen.musicweb.entity.SysUser;

import java.util.List;

public interface SysUserService {
    List<SysUser> search();

    SysUser searchById(Integer id);

    boolean add(SysUser sysUser);

    boolean update(SysUser sysUser);

    boolean delete(Integer id);


}
