package com.klen.musicweb.service;


import com.klen.musicweb.entity.SysRole;

import java.util.List;

public interface SysRoleService {
    List<SysRole> search();

    boolean add(SysRole sysRole);

    boolean delete(Integer id);

    SysRole searchById(Integer id);

    boolean update(SysRole sysRole);
}
