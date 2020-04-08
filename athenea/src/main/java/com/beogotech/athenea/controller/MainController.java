package com.beogotech.athenea.controller;

import com.beogotech.athenea.utils.AtheneaUtil;
import com.beogotech.athenea.utils.LoggerFactoryUtil;
import org.slf4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
	
	private static Logger LOG = LoggerFactoryUtil.getLog(MainController.class);

	@GetMapping(value = AtheneaUtil.APP_ROOT_URI)
	public String showIndexPage(Model model){
		model.addAttribute("year", AtheneaUtil.COPYRIGHT_YEAR_INT);
		return AtheneaUtil.INDEX_PAGE_URI;
	}
	
	@GetMapping(value = AtheneaUtil.LOGIN_PAGE_URI)
	public String showLoginPage(Model model){
		model.addAttribute("year", AtheneaUtil.COPYRIGHT_YEAR_INT);
		return AtheneaUtil.LOGIN_PAGE_URI;
	}
}