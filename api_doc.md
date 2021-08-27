/our/services --{Body[Content-Language]}

/our/service/{id} -- {Body[Content-Language]} get-id

/our/career/lists --{Body[Content-Language]}

/our/career/{id} -- {Body[Content-Language]}get-id

/apply/posting --{Header [Content-Language] Body[cvfile,title,email,phone,descriptionfull_name]}

/page/{code} --{Header [Content-Language],get-code

/subscribe --{Body [email]}

/contacts --{Headers[Content-Language]}

/faq --{Headers[Content-Language]}

/estimate -- {Headers[Content-Language]}

/estimate/send -- {Headers[Content-Language]

 Body(form-data)[full_name,email,phone,description,company,file,estimate_type_id[x],estimate_type_id[y]]}


Route::get('/sections', 'HomeController@getSectionJson');

    // Routes for header
    Route::get('/home/header', 'HomeController@getHeaderJson');

    // Home services get methods
    Route::get('/home/services', 'HomeController@getHomeServicesJson');

    // Home testimonial get methods
    Route::get('/home/testimonials', 'HomeController@getHomeTestimonialsJson');

    // Home technologies get methods
    Route::get('/home/technologies', 'HomeController@getHomeTechnologyJson');

    // Home estimate get methods
    Route::get('/home/estimate', 'HomeController@getHomeEstimateJson');
    Route::get('/our/works', 'OurWorkController@getOurWorkJson');
    Route::post('/send/mail', 'SendMailController@store');
    Route::get('/contactus/placeholder', 'ContactUsPlaceholderController@getContactUsPlaceholderJson');

    // Footer get methods
    Route::get('/footer_contact', 'FooterContactController@index');
    Route::get('/footer_company', 'FooterCompanyController@index');
    Route::get('/footer_services', 'FooterServicesController@index');

    // About page get methods
    Route::get('/about_header', 'AboutHeaderController@index');
    Route::get('/about_counters', 'AboutCounterController@index');
    Route::get('/about_staff', 'AboutStaffBioController@index');
    Route::get('/about_join', 'AboutJoinController@index');
    Route::get('/about_overviews', 'AboutOverviewController@index');
    Route::get('/about_why', 'AboutWhyWorkController@index');
    Route::get('/about_approach', 'AboutApproachController@index');
    Route::get('/about_skills', 'AboutSkillsController@index');

    //Services page get methods
    Route::get('/services_header', 'ServicesHeaderController@index');
    Route::get('/services_steps', 'ServicesStepsController@index');
    Route::get('/services_sections', 'ServicesSectionsController@index');
    Route::get('/services_estimate', 'ServicesEstimateController@index');
    Route::get('/services_step_by_step', 'ServicesStepByStepController@index');

    //Pages page get methods
    Route::get('/page/{code}', 'PagesController@getPageInfJson');

    // Contact Us get method
    Route::get('/contacts', 'ContactController@getContactsJson');

    //Get Frequently Asked Questions Data
    Route::get('/faq', 'FaqController@getFaqJson');
    
    //Services Backend page get methods
    Route::get('/our/services', 'ServiceController@getServicesJson');
    Route::get('/our/service/{id}', 'ServiceController@getServiceContentJson');
    Route::get('/services_backend_branches', 'ServicesBackendController@index');
    Route::get('/services_backend_contact', 'ServicesBackendContactController@index');
    Route::get('/services_backend_view', 'ServicesBackendController@getBackendViews');
    Route::get('/services_other', 'ServicesBackendController@getOtherServices');
    
    //Careers Backend page get methods
    Route::get('/our/career/lists', 'CareersController@getCareerListsJson');
    Route::get('/our/career/{id}', 'CareersController@getCareerJson');
    Route::post('/apply/posting', 'CareersController@sendCv');

    //Estimate methods
    Route::get('/estimate', 'EstimateController@getEstimateTypesJson');
    Route::post('/estimate/send', 'EstimateController@sendEstimateFile');
});

//Add Subscribe method
Route::post('/subscribe', 'SubscribeController@addSubscribe')->middleware('ourIpaddr');
Route::get('/home_header_icons', 'HomeHeaderIconController@index')->middleware('ourIpaddr');
Route::get('/footer_icons', 'FooterIconsController@index')->middleware('ourIpaddr');
Route::get('/services_backend_branches_icons', 'ServicesBackendController@getBranchesIcons')->middleware('ourIpaddr');