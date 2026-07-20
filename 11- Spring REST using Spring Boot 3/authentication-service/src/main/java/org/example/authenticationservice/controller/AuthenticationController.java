package org.example.authenticationservice.controller;

import org.example.authenticationservice.model.AuthenticationResponse;
import org.example.authenticationservice.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(Principal principal) {

        String token = jwtUtil.generateToken(principal.getName());

        return new AuthenticationResponse(token);
    }
}