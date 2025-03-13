package com.example.calculatorbe;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
public class CalculatorbeController {
    
    @GetMapping("/add")
    public Map<String, Float> add(@RequestParam float num1, @RequestParam float num2) {
        float result = num1 + num2;
        Map<String, Float> response = new HashMap<>();
        response.put("result", result);
        return response;
    }

    @GetMapping("/sub")
    public Map<String, Float> sub(@RequestParam float num1, @RequestParam float num2) {
        float result = num1 - num2;
        Map<String, Float> response = new HashMap<>();
        response.put("result", result);
        return response;
    }
}