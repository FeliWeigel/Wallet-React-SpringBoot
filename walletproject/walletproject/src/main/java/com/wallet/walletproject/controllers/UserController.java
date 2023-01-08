package com.wallet.walletproject.controllers;

import com.wallet.walletproject.models.User;
import com.wallet.walletproject.services.UserInt;
import com.wallet.walletproject.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserInt userInt;
    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/users/all", method = RequestMethod.GET)
    public List<User> getUsers(){
        return userInt.getUsers();
    }

    @RequestMapping(value = "api/users/register", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public String userRegister(@RequestBody User user){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1,1024,1,user.getPassword());
        if(user.getPassword().toCharArray().length >= 6 && userInt.emailValid(user)) {
            user.setPassword(hash);
            user.setLogo(user);
            userInt.userRegister(user);
            return "ok";
        }

        return "error";
    }

    @RequestMapping(value = "api/users/login", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public String userLogin(@RequestBody User user){
        User userLogin = userInt.userAuth(user);
        if(userLogin != null){
            String token = jwtUtil.create(String.valueOf(userLogin.getId()), userLogin.getEmail());
            return token;
        }

        return "login fail";
    }


}
