package com.wallet.walletproject.controllers;

import com.wallet.walletproject.models.User;
import com.wallet.walletproject.repositories.UserInt;
import com.wallet.walletproject.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

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
    public String userLogin(@RequestBody User user, HttpSession httpSession){
        Optional<User> userLogin = Optional.ofNullable(userInt.userAuth(user));

        if(userLogin.isPresent()){
            httpSession.setAttribute("userId", userLogin.get().getId());
        }
        if(userLogin.get() != null){
            String token = jwtUtil.create(String.valueOf(userLogin.get().getId()), userLogin.get().getEmail());
            return token;
        }

        return "login fail";
    }

    @GetMapping(value = "api/users/user")
    @CrossOrigin(origins = "http://localhost:3000")
    public String getUserSession(User user, HttpSession session){
        Optional<User> userLogin = Optional.ofNullable(userInt.userAuth(user));
        if(userLogin.isPresent()){
            return String.valueOf(session.getAttribute("userId"));
        }
        return "fail";
    }


}
