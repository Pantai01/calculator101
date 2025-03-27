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
    public Float add(@RequestParam(defaultValue = "0.0") float num1, @RequestParam(defaultValue = "0.0") float num2) {
        float result = num1 + num2;
        //Map<String, Float> response = new HashMap<>();
        //response.put("result", result);
        return result;
    }

    @GetMapping("/sub")
    public Float sub(@RequestParam(defaultValue = "0.0") float num1, @RequestParam(defaultValue = "0.0") float num2) {
        float result = num1 - num2;
        //Map<String, Float> response = new HashMap<>();
        //response.put("result", result);
        return result;
    }
}