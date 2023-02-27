package com.wallet.walletproject.repositories;

import com.wallet.walletproject.models.User;

import java.util.List;

public interface UserInt {

    List<User> getUsers();
    void userRegister(User user);
    boolean emailValid(User user);
    User userAuth(User user);
    String getUserSession(User user);
}
