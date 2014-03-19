package com.example.browser;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class SimpleBrowser extends Activity {

	@Override
	
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_simple_browser);
		
		WebView myWebView = (WebView) findViewById(R.id.webview);
		myWebView.loadUrl("http://wander.site90.com/");
	}

}
