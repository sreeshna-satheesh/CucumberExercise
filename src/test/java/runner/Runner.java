package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "./Feature/Login.feature",
		glue = "stepDefsPOM",
		monochrome = true,
		//dryRun = true
		plugin = {"pretty", "html: test-output"},
		tags = "@Smoke"
		
		)
public class Runner {

}
