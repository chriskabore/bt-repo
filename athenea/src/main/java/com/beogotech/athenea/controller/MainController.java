package com.beogotech.athenea.controller;

import com.beogotech.athenea.utils.AtheneaUtil;
import com.beogotech.athenea.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {
	
	private static Logger LOG = LoggerFactoryUtil.getLog(MainController.class);

	@GetMapping(value = "/dashboard")
	public String showIndexPage(Model model){
		model.addAttribute("year", AtheneaUtil.COPYRIGHT_YEAR_INT);
		return "/dashboard";
	}
	
	@GetMapping(value = {"/", "/login"})
	public String showLoginPage(Model model){
		model.addAttribute("year", AtheneaUtil.COPYRIGHT_YEAR_INT);
		return AtheneaUtil.LOGIN_PAGE_URI;
	}
	
	@PostMapping(value = "/login")
	public String logUserIn(Model model){
		model.addAttribute("year", AtheneaUtil.COPYRIGHT_YEAR_INT);
		return "redirect:dashboard";
	}
	
	
}
