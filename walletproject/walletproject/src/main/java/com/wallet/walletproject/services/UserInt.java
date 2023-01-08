package com.wallet.walletproject.services;

import com.wallet.walletproject.models.User;

import java.util.List;

public interface UserInt {

    List<User> getUsers();
    void userRegister(User user);
    boolean emailValid(User user);
    User userAuth(User user);
}
