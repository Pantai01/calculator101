package com.example.calculatorbe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class CalculatorbeController {
    
    @GetMapping("/add")
    public Map<String, Integer> add(@RequestParam int num1, @RequestParam int num2) {
        int result = num1 + num2;
        Map<String, Integer> response = new HashMap<>();
        response.put("result", result);
        return response;
    }

    @GetMapping("/sub")
    public Map<String, Integer> sub(@RequestParam int num1, @RequestParam int num2) {
        int result = num1 - num2;
        Map<String, Integer> response = new HashMap<>();
        response.put("result", result);
        return response;
    }
}