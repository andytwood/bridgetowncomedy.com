Ember.TEMPLATES["application"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div id=\"wrap\">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/header", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n\n  <div class=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        ");
  data.buffer.push(escapeExpression(((helpers.outlet || (depth0 && depth0.outlet) || helperMissing).call(depth0, "jumbotron", {"name":"outlet","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n      </div>\n    </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div id=\"push\"></div>\n</div>\n\n");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/footer", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n\n\n<!-- MODAL FOR CONTACT -->\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          contact us\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row centered\">\n            <p>We are available 24/7, so don't hesitate to contact us.</p>\n            <p>\n              Somestreet Ave, 987<br/>\n              London, UK.<br/>\n              +44 8948-4343<br/>\n              hi@blacktie.co\n            </p>\n            <div id=\"mapwrap\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Save & Go</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Contact")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p>For advertising and general festival inquiries, please contact us at <a href=\"mailto:info@bridgetowncomedy.com\">info@bridgetowncomedy.com</a></p>\n\n<p>For press and industry requests, please contact us at <a href=\"mailto:press@bridgetowncomedy.com\">press@bridgetowncomedy.com</a></p>\n\n<p>If you are interested in volunteering, please visit the following site: <a href=\"http://bridgetown.festivalthing.com/volunteering\">bridgetown.festivalthing.com/volunteering</a></p>\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["event"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n    <span class=\"schedule-list__item-venue-label label label-default\">");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <p>\n          <img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("show.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n        </p>\n      </div>\n\n      <div class=\"col-sm-8\">\n        <p>\n          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Copy", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n        </p>\n      </div>\n    </div>\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "emcee", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <strong>MC: </strong> ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emcee.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <p class=\"lead\">\n    ");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("<br/>\n    ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</small>\n  </p>\n  <p>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venue", "venue", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </p>\n  <p>\n    ");
  stack1 = ((helpers.googleMapLink || (depth0 && depth0.googleMapLink) || helperMissing).call(depth0, "venue.address", {"name":"googleMapLink","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </p>\n\n");
  stack1 = helpers['if'].call(depth0, "show", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  <ul class=\"list-group\">\n    <li class=\"list-group-item active\" style=\"background:#695b53;\">\n    <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Performers</h4>\n    </li>\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(8, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </ul>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["faqs"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("FAQs")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <h2 class=\"text-center\">FAQs to come...</p>\n\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["four_oh_four"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Page Not Found")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n  <div class=\"container main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"\">\n          <h2>The page cannot be found...</h2>\n          <p>Perhaps you are here because:</p>\n          <ul>\n            <li>The page has moved</li>\n            <li>The page no longer exists</li>\n          </ul>\n          <p><a class=\"btn btn-block btn-primary\" href=\"/\">Return to homepage </a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["history"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("History")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "mainContent", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["index"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("<div class=\"jumbotron jumbotron-color-1 jumbotron-page-header\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-lg-8 col-lg-offset-2 text-center\">\n      <div class=\"header-logo\"><img class=\"img-responsive\" src=\"/img/logo-long-inverse.png?1\" /></div>\n      <h3>Portland, OR</h3>\n      <h3>May 8th - May 11th</h3>\n      </div>\n    </div><!-- row -->\n  </div><!-- container -->\n</div><!-- headerwrap -->\n\n<div class=\"main-content\">\n  <div class=\"container\">\n    <div class=\"row centered\">\n      <div class=\"col-sm-6\">\n\n        <h3>Thank You!</h3>\n        ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/news", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n      </div><!-- col-lg-6 -->\n\n      <div class=\"col-sm-6\">\n        <h3>@bridgetown</h3>\n        <div class=\"panel panel-default\">\n\n          <div class=\"panel-body\">\n\n          ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/recent_tweets", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n          </div>\n        </div>\n      </div><!-- col-lg-6 -->\n      <div class=\"clearfix\"></div>\n    </div><!-- row -->\n    <br />\n    <br />\n  </div><!-- container -->\n\n\n\n");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/sponsors_front_page", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(" <div class=\"row\"> <div class=\"jumbotron jumbotron-default\">\n   <div class=\"container main-content\">\n    <h1 class=\"text-center\">Loading...</h1>\n      <h2>&nbsp;</h2>\n      <h1>");
  data.buffer.push(escapeExpression(((helpers['x-spinner'] || (depth0 && depth0['x-spinner']) || helperMissing).call(depth0, {"name":"x-spinner","hash":{
    'width': (3),
    'color': ("#333"),
    'shadow': (false),
    'length': (10),
    'radius': (10),
    'lines': (12)
  },"hashTypes":{'width': "NUMBER",'color': "STRING",'shadow': "BOOLEAN",'length': "NUMBER",'radius': "NUMBER",'lines': "NUMBER"},"hashContexts":{'width': depth0,'color': depth0,'shadow': depth0,'length': depth0,'radius': depth0,'lines': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("</h1>\n      <h2>&nbsp;</h2>\n    </div>\n  </div>\n</div>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["performer"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              <br /> (");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "event.start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(")\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Show MC</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "mc_events", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event.id", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  data.buffer.push("← All Performers");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Bio", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n");
  stack1 = helpers['if'].call(depth0, "isAnMC", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      <p>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["performers"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </div>\n      <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </legend>\n    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("performer.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Performers")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n <h2 class=\"text-center\">Performers to be announced...</h2>\n  <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["press"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Press")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <p>The Huffington Post</p>\n\n  <p><a href=\"http://www.huffingtonpost.com/barbara-holm/why-the-world-needs-bridg_b_3047738.html\" >http://www.huffingtonpost.com/barbara-holm/why-the-world-needs-bridg_b_3047738.html</a></p>\n\n  <p>LaughSpin.com</p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/\" >http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/\" >http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/\" >http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/\" >http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/</a></p>\n\n  <p><a href=\"http://www.laughspin.com/2013/04/19/bridgetown-comedy-festival-day-1-lance-bangs-megan-amram-moshe-kasher-and-more/%20http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-2-dad-boner-ian-karmel-peter-serafinowicz-more/%20http://www.laughspin.com/2013/04/21/bridgetown-comedy-festival-day-3-matt-braunger-kurt-braunohler-and-more/%20http://www.laughspin.com/2013/04/22/bridgetown-comedy-festival-day-4-theme-park-with-oscar-nunez-janet-varney-michael-hitchcock-natasha-leggero/%20http://www.laughspin.com/2013/04/19/bridgetown-diary-inside-portlands-annual-comedy-festival/\" >http://www.laughspin.com/2013/04/19/bridgetown-diary-inside-portlands-annual-comedy-festival/</a></p>\n\n  <p>Splitsider.com</p>\n\n  <p><a href=\"http://splitsider.com/2013/04/go-backstage-at-the-bridgetown-comedy-festival-with-andy-peters-wandertown-podcast/\" >http://splitsider.com/2013/04/go-backstage-at-the-bridgetown-comedy-festival-with-andy-peters-wandertown-podcast/</a></p>\n\n  <p>Serial Optimist</p>\n\n  <p><a href=\"http://www.serialoptimist.com/interviews/allen-strickland-williams-a-man-we-love-15410.html\" >http://www.serialoptimist.com/interviews/allen-strickland-williams-a-man-we-love-15410.html</a></p>\n\n  <p>The Oregonian/OregonLive.com</p>\n\n  <p><a href=\"http://www.oregonlive.com/performance/index.ssf/2013/04/laugh_it_up_portland.html\" >http://www.oregonlive.com/performance/index.ssf/2013/04/laugh_it_up_portland.html</a></p>\n\n  <p><a href=\"http://www.oregonlive.com/movies/index.ssf/2013/04/bridgetown_comedy_festival_who.html\" >http://www.oregonlive.com/movies/index.ssf/2013/04/bridgetown_comedy_festival_who.html</a></p>\n\n  <p>Oregon Public Broadcasting</p>\n\n  <p><a href=\"http://www.opb.org/artsandlife/article/bridgetown-comedy-festival-announces-2013-lineup/\" >http://www.opb.org/artsandlife/article/bridgetown-comedy-festival-announces-2013-lineup/</a></p>\n\n  <p><a href=\"http://www.opb.org/thinkoutloud/shows/local-comics-perform-bridgetown-comedy-festival/\" >http://www.opb.org/thinkoutloud/shows/local-comics-perform-bridgetown-comedy-festival/</a></p>\n\n  <p>KGW Newschannel 8</p>\n\n  <p><a href=\"http://www.kgw.com/thesquare/Talk-Box-Bridgetown-Comedy-Festival-203321801.html\" >http://www.kgw.com/thesquare/Talk-Box-Bridgetown-Comedy-Festival-203321801.html</a></p>\n\n  <p><em>Portland Mercury</em></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/03/13/2013-bridgetown-comedy-festival-lineup-announced\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/03/13/2013-bridgetown-comedy-festival-lineup-announced</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/portland/bridgetown-comedy-fest/Content?oid=9077410\" >http://www.portlandmercury.com/portland/bridgetown-comedy-fest/Content?oid=9077410</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/19/your-drunk-bridgetown-update\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/19/your-drunk-bridgetown-update</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/a-hungover-bridgetown-update\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/a-hungover-bridgetown-update</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/your-drunk-bridgetown-update-2\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/your-drunk-bridgetown-update-2</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/22/a-hungover-bridgetown-update-3\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/22/a-hungover-bridgetown-update-3</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/hey-bridgetown-go-see-theme-park-this-afternoon\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/hey-bridgetown-go-see-theme-park-this-afternoon</a><br />\n  <a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/saturday-night-bridgetown-update-emily-heller-won-iron-comic-and-guy-branum-won-twitter\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/saturday-night-bridgetown-update-emily-heller-won-iron-comic-and-guy-branum-won-twitter</a></p>\n\n  <p><a href=\"http://blogtown.portlandmercury.com/BlogtownPDX/archives/2013/04/23/bridgetown-parting-shots\" >http://blogtown.portlandmercury.com/BlogtownPDX/archives/2013/04/23/bridgetown-parting-shots</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/sketching-bridgetown\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/20/sketching-bridgetown</a></p>\n\n  <p><a href=\"http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/if-you-missed-that-simpsons-panel-youre-a-terrible-portlander\" >http://www.portlandmercury.com/BlogtownPDX/archives/2013/04/21/if-you-missed-that-simpsons-panel-youre-a-terrible-portlander</a></p>\n\n  <p><em>Portland Monthly</em> magazine</p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/bridgetown-comedy-fest-is-coming-march-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/bridgetown-comedy-fest-is-coming-march-2013</a></p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-local-bridgetown-comedian-nathan-brannon-april-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-local-bridgetown-comedian-nathan-brannon-april-2013</a></p>\n\n  <p><a href=\"http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-simpsons-writer-dana-gould-april-2013\" >http://www.portlandmonthlymag.com/arts-and-entertainment/culturephile-portland-arts/articles/q-and-a-simpsons-writer-dana-gould-april-2013</a></p>\n\n  <p>PDXPipeline</p>\n\n  <p><a href=\"http://pdxpipeline.com/2013/04/09/portland-bridgetown-comedy-festival/\" >http://pdxpipeline.com/2013/04/09/portland-bridgetown-comedy-festival/</a></p>\n\n  <p>CultureMob</p>\n\n  <p><a href=\"http://culturemob.com/culturemob-chats-with-three-of-seattles-bridgetown-first-timers\" >http://culturemob.com/culturemob-chats-with-three-of-seattles-bridgetown-first-timers</a></p>\n\n  <p><a href=\"http://culturemob.com/bridgetown-qa-four-questions-for-barbara-holm\" >http://culturemob.com/bridgetown-qa-four-questions-for-barbara-holm</a></p>\n\n  <p><a href=\"http://culturemob.com/emmett-montgomery-talks-bridgetown-airblades-decapitations\" >http://culturemob.com/emmett-montgomery-talks-bridgetown-airblades-decapitations</a></p>\n\n  <p><a href=\"http://culturemob.com/if-you-only-see-four-shows-at-bridgetown-honestly-you-are-hardly-trying-at-all\" >http://culturemob.com/if-you-only-see-four-shows-at-bridgetown-honestly-you-are-hardly-trying-at-all</a></p>\n\n  <p><a href=\"http://culturemob.com/discovery-and-excitement-bridgetown-2013-day-1\" >http://culturemob.com/discovery-and-excitement-bridgetown-2013-day-1</a></p>\n\n  <p><a href=\"http://culturemob.com/todd-glass-and-the-hawthorne-lounge-bridgetown-day-3\" >http://culturemob.com/todd-glass-and-the-hawthorne-lounge-bridgetown-day-3</a></p>\n\n  <p><em>Nailed</em> magazine</p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-janet-varney/\" >http://www.nailedmagazine.com/interview/comedian-janet-varney/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-karen-kilgariff/\" >http://www.nailedmagazine.com/interview/comedian-karen-kilgariff/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-shane-torres/\" >http://www.nailedmagazine.com/interview/comedian-shane-torres/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-moshe-kasher/\" >http://www.nailedmagazine.com/interview/comedian-moshe-kasher/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-myq-kaplan/\" >http://www.nailedmagazine.com/interview/comedian-myq-kaplan/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-lonnie-bruhn/\" >http://www.nailedmagazine.com/interview/comedian-lonnie-bruhn/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-gabe-dinger/\" >http://www.nailedmagazine.com/interview/comedian-gabe-dinger/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-paul-gilmartin/\" >http://www.nailedmagazine.com/interview/comedian-paul-gilmartin/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-chris-fairbanks/\" >http://www.nailedmagazine.com/interview/comedian-chris-fairbanks/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-kurt-braunohler/\" >http://www.nailedmagazine.com/interview/comedian-kurt-braunohler/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-paul-jay/\" >http://www.nailedmagazine.com/interview/comedian-paul-jay/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-barbara-holm/\" >http://www.nailedmagazine.com/interview/comedian-barbara-holm/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/interview-comedian-katie-rose-leon/\" >http://www.nailedmagazine.com/interview/interview-comedian-katie-rose-leon/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-emily-heller/\" >http://www.nailedmagazine.com/interview/comedian-emily-heller/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/interview/comedian-baron-vaughn/\" >http://www.nailedmagazine.com/interview/comedian-baron-vaughn/</a></p>\n\n  <p><a href=\"http://www.nailedmagazine.com/ec/top-12-quick-jokes-from-bridgetown-comedy-festival/\" >http://www.nailedmagazine.com/ec/top-12-quick-jokes-from-bridgetown-comedy-festival/ </a></p>\n\n  <p><br />\n  The Superslice</p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/17/the-superslice-guide-to-the-2013-bridgetown-comedy-festival/\" >http://thesuperslice.com/2013/04/17/the-superslice-guide-to-the-2013-bridgetown-comedy-festival/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/16/bridgetown-comedy-festival-2013-karen-kilgariff-interview/\" >http://thesuperslice.com/2013/04/16/bridgetown-comedy-festival-2013-karen-kilgariff-interview/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/13/bridgetown-comedy-festival-2013-matt-braunger-x-nathan-brannon-x-whitney-streed-interviews/\" >http://thesuperslice.com/2013/04/13/bridgetown-comedy-festival-2013-matt-braunger-x-nathan-brannon-x-whitney-streed-interviews/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/05/05/joe-sib-interview/\" >http://thesuperslice.com/2013/05/05/joe-sib-interview/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/28/bridgetown-comedy-festival-2013-recap-part-1-interviews-with-ian-karmel-lance-bangs/\" >http://thesuperslice.com/2013/04/28/bridgetown-comedy-festival-2013-recap-part-1-interviews-with-ian-karmel-lance-bangs/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/04/30/bridgetown-comedy-festival-2013-recap-part-2/\" > http://thesuperslice.com/2013/04/30/bridgetown-comedy-festival-2013-recap-part-2/</a></p>\n\n  <p><a href=\"http://thesuperslice.com/2013/05/03/bridgetown-comedy-festival-2013-recap-part-3/\" >http://thesuperslice.com/2013/05/03/bridgetown-comedy-festival-2013-recap-part-3/</a></p>\n\n  <p><br />\n  AfterEllen.com</p>\n\n  <p><a href=\"http://www.afterellen.com/2013/04/lez-stand-out-bridgetown-comedy-fest\" >http://www.afterellen.com/2013/04/lez-stand-out-bridgetown-comedy-fest</a></p>\n\n  <p><a href=\"http://www.afterellen.com/2013/04/lez-stand-out-bridgetowns-best\" >http://www.afterellen.com/2013/04/lez-stand-out-bridgetowns-best</a></p>\n\n  <p><em>Willamette Week</em></p>\n\n  <p><a href=\"http://www.wweek.com/portland/blog-30065-bridgetown_comedy_festival_moments_from_day_1.html\" >http://www.wweek.com/portland/blog-30065-bridgetown_comedy_festival_moments_from_day_1.html</a></p>\n\n  <p><a href=\"http://www.wweek.com/portland/blog-30066-bridgetown_comedy_festival_moments_from_days_2_and_3.html\" >http://www.wweek.com/portland/blog-30066-bridgetown_comedy_festival_moments_from_days_2_and_3.html</a></p>\n\n  <p>DailyBlender.com</p>\n\n  <p><a href=\"http://www.dailyblender.com/2013/04/comedy-can-save-the-day-portland-comic-ian-karmel/\" >http://www.dailyblender.com/2013/04/comedy-can-save-the-day-portland-comic-ian-karmel/</a></p>\n\n  <p>DailyDot.com</p>\n\n  <p><a href=\"http://www.dailydot.com/entertainment/bridgetown-comedy-festival-matt-braunger/\" >http://www.dailydot.com/entertainment/bridgetown-comedy-festival-matt-braunger/</a></p>\n\n  <p><a href=\"http://www.dailydot.com/entertainment/walking-room-podcast-greg-behrendt-interview/\" >http://www.dailydot.com/entertainment/walking-room-podcast-greg-behrendt-interview/</a></p>\n\n  <p><a href=\"http://ec.dailydot.com/entertainment/megan-amram-twitter-interview-parks-rec/\" >http://ec.dailydot.com/entertainment/megan-amram-twitter-interview-parks-rec/</a></p>\n\n  <p>PODCASTS at the festival</p>\n\n  <p>Walking the Room</p>\n\n  <p><a href=\"https://soundcloud.com/walking-the-room/148-gallaghers-suicide-note\" >https://soundcloud.com/walking-the-room/148-gallaghers-suicide-note</a> (live show featuring guests Paul Gilmartin, Todd Glass, and Gallagher)<a href=\"https://soundcloud.com/walking-the-room/147-moshe-kasher-at-bridgetown\" >https://soundcloud.com/walking-the-room/147-moshe-kasher-at-bridgetown</a> (with guest Moshe Kasher)</p>\n\n  <p>The Paul Goebel Show </p>\n\n  <p><a href=\"http://www.thekingoftv.com/podcast/2013/04/23/episode-346-w-myq-kaplan-xander-deveaux-gallagher/\" >http://www.thekingoftv.com/podcast/2013/04/23/episode-346-w-myq-kaplan-xander-deveaux-gallagher</a> (final episode, featuring guests Myq Kaplan, Xander Deveaux, and Gallagher)</p>\n\n  <p>Probably Science</p>\n\n  <p><a href=\"http://probablyscience.tumblr.com/post/48664764618/episode-66-with-peter-serafinowicz-and-gallagher\" >http://probablyscience.tumblr.com/post/48664764618/episode-66-with-peter-serafinowicz-and-gallagher</a> (with guests Peter Serafinowicz and Gallagher)</p>\n\n  <p>Put Your Hands Together</p>\n\n  <p><a href=\"http://castroller.com/podcasts/PutYourHands/3527529\" >http://castroller.com/podcasts/PutYourHands/3527529</a> (Cameron Esposito hosts Reggie Watts, Karen Kilgariff, Seth Herzog, Ben Kronberg, Andy Wood, and Rhea Butcher)</p>\n\n  <p>The Mental Illness Happy Hour</p>\n\n  <p><a href=\"http://mentalpod.com/Karen-Kilgariff-podcast\" >http://mentalpod.com/Karen-Kilgariff-podcast</a> (host Paul Gilmartin talks to Karen Kilgariff)</p>\n\n  <p>The JV Club</p>\n\n  <p><a href=\"http://www.nerdist.com/2013/05/the-jv-club-60-live-from-bridgetown/\" >http://www.nerdist.com/2013/05/the-jv-club-60-live-from-bridgetown</a> (Janet Varney interviews Natasha Leggero and Karen Kilgariff)</p>\n\n  <p>Who Charted?</p>\n\n  <p><a href=\"http://www.earwolf.com/episode/42613-two-charted-64/\" >http://www.earwolf.com/episode/42613-two-charted-64</a> (Howard and Kulap give a Bridgetown recap)</p>\n\n  <p>Shanrock's Triviopodogy</p>\n\n  <p><a href=\"http://www.patiohpatino.com/wp-content/uploads/2013/05/Trivipodigy_Ep12-FINAL-CUT.mp3\" >http://www.patiohpatino.com/wp-content/uploads/2013/05/Trivipodigy_Ep12-FINAL-CUT.mp3</a> (guest host Kenny Sessler interviews Veronica Heath and Paul Goebel, the champions of the 2013 Comedy Cup Quiz at Bridgetown.)</p>\n\n  <p>Wandertown: Audio Dispatches from the Bridgetown Comedy Festival</p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-1\" >https://soundcloud.com/andy_peters/sets/wandertown-day-1</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-2\" >https://soundcloud.com/andy_peters/sets/wandertown-day-2</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-3\" >https://soundcloud.com/andy_peters/sets/wandertown-day-3</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-day-4\" >https://soundcloud.com/andy_peters/sets/wandertown-day-4</a></p>\n\n  <p><a href=\"https://soundcloud.com/andy_peters/sets/wandertown-the-goodest-of-the\" >https://soundcloud.com/andy_peters/sets/wandertown-the-goodest-of-the</a></p>\n\n  <p>FunEmployment Radio</p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/12/funemployment-radio-episode-839/\" >http://funemploymentradio.com/2013/04/12/funemployment-radio-episode-839/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/16/funemployment-radio-episode-840/\" >http://funemploymentradio.com/2013/04/16/funemployment-radio-episode-840/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/19/funemployment-radio-episode-843/\" >http://funemploymentradio.com/2013/04/19/funemployment-radio-episode-843/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/22/funemployment-radio-episode-844/\" >http://funemploymentradio.com/2013/04/22/funemployment-radio-episode-844/</a></p>\n\n  <p><a href=\"http://funemploymentradio.com/2013/04/24/funemployment-radio-episode-846/\" >http://funemploymentradio.com/2013/04/24/funemployment-radio-episode-846/</a></p>\n\n  <p>VIDEOS</p>\n\n  <p><a href=\"https://www.youtube.com/watch?feature=player_embedded&amp;v=IF306s_jW_k\" >https://www.youtube.com/watch?feature=player_embedded&amp;v=IF306s_jW_k </a>(by Nate Craig with help from other performers)</p>\n\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Schedule")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <h2 class=\"text-center\">Schedule to be announced...</h2>\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  <p>\n    <a target=\"_blank\" href=\"https://www.google.com/calendar/embed?src=ij2h1kcsksapda46r4e8qr2atc%40group.calendar.google.com&ctz=America/Los_Angeles\"><img src=\"/img/add-to-google-calendar.gif\" /></a>\n  </p>\n\n\n<div class=\"schedule-list\">\n  <div class=\"text-left\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterThursday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Thursday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterFriday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Friday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSaturday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Saturday</button>\n        </div>\n        <div class=\"col-xs-6 col-sm-3\">\n          <button type=\"button\" style=\"margin: 0em 0em 0.5em;\" class=\"btn btn-default  btn-block\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filterSunday", {"name":"action","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push(">Sunday</button>\n        </div>\n      </div>\n    </div>\n    <ul class=\"list-group\">\n      ");
  data.buffer.push(escapeExpression(((helpers['cloaked-collection'] || (depth0 && depth0['cloaked-collection']) || helperMissing).call(depth0, {"name":"cloaked-collection","hash":{
    'defaultHeight': (218),
    'preservesContext': (true),
    'content': ("controller.events"),
    'cloakView': ("App.ScheduleListItemView")
  },"hashTypes":{'defaultHeight': "NUMBER",'preservesContext': "BOOLEAN",'content': "ID",'cloakView': "ID"},"hashContexts":{'defaultHeight': depth0,'preservesContext': depth0,'content': depth0,'cloakView': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n    </ul>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["show"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "event", {"name":"link-to","hash":{
    'classNames': ("list-group-item")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong> - ");
  stack1 = helpers._triageMustache.call(depth0, "event.venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n            <br /> (");
  data.buffer.push(escapeExpression(((helpers.niceDate || (depth0 && depth0.niceDate) || helperMissing).call(depth0, "event.start_time", {"name":"niceDate","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(")\n\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"6":function(depth0,helpers,partials,data) {
  data.buffer.push("← All Shows");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 text-center\">\n      <p><img class=\"img-responsive performer-headshot\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" /></p>\n    </div>\n    <div class=\"col-sm-8\">\n      <p>\n        ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Copy", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n      </p>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "sortedEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <p>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "shows", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["shows"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("    <div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n      <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </div>\n      <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("      </legend>\n    </div>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("        <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("show.headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Shows")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <h2 class=\"text-center\">Shows to be announced...</h2>\n  <div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "show", "in", "controller", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["sponsors"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Sponsors")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content sponsors-container text-center\">\n  <h2 class=\"text-center\">Sponsors to be announced...</h2>\n</div><!-- container -->\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["venue"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "schedule-list-item", {"name":"view","hash":{
    'context': ("event")
  },"hashTypes":{'context': "ID"},"hashContexts":{'context': depth0},"types":["STRING"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  data.buffer.push("          <li class=\"list-group-item\">No shows scheduled yet...</li>\n");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("← All Venues");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("model.Name")
  },"hashTypes":{'title': "ID"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container single-performer main-content\">\n  <div class=\"row\">\n\n    <div class=\"col-sm-12\">\n      <p>\n        ");
  stack1 = ((helpers.googleMapLink || (depth0 && depth0.googleMapLink) || helperMissing).call(depth0, "address", {"name":"googleMapLink","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" style=\"background:#695b53;\">\n        <h4 class=\"list-group-item-heading\" style=\"background:#695b53;color:white\">Shows</h4>\n        </li>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "events", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(3, data),"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <p>\n        ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venues", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n      </p>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["venues"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push(escapeExpression(((helpers['page-title-banner'] || (depth0 && depth0['page-title-banner']) || helperMissing).call(depth0, {"name":"page-title-banner","hash":{
    'title': ("Venues")
  },"hashTypes":{'title': "STRING"},"hashContexts":{'title': depth0},"types":[],"contexts":[],"data":data}))));
  data.buffer.push("\n\n<div class=\"container main-content\">\n  <h2 class=\"text-center\">Venues to be decided...</h2>\n</div>\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["components/page-title-banner"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_event_list_item"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  	<li>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </li>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("        ");
  stack1 = helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n<p>\n  <strong>");
  stack1 = helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n</p>\n<ul>\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.performers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</ul>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_footer"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push("Home");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("Performers");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("Press");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("Contact");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<!-- FOOTER -->\n  <footer class=\"site-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"social\">\n  <ul class=\"social-buttons\">\n    <li class=\"follow-btn\">\n      <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"bridgetown\"  data-related=\"bridgetown\" data-hashtags=\"bridgetowncomedy\">Tweet</a>\n    </li>\n    <li class=\"tweet-btn\">\n      <a href=\"https://twitter.com/bridgetown\" class=\"twitter-follow-button\" data-show-count=\"false\" >Follow @bridgetown</a>\n    </li>\n  </ul>\n</div>\n\n\n    <p>Designed and built by <a href=\"http://twitter.com/joshuabremer\" target=\"_blank\">@joshuabremer</a>. Powered by <a target=\"_blank\" href=\"http://squarespace.com/?channel=events&subchannel=comedy&source=bridgetown14\">Squarespace</a></p>\n    <ul class=\"footer-links muted\">\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n      <li>·</li>\n      <li>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n    </ul>\n  </div>\n</footer>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_header"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  data.buffer.push(" <span class=\"navbar-brand\"><img class=\"navbar-brand-logo\" src=\"/img/logo-long-inverse.png?1\" /></span>");
  },"3":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Performers</span>");
  },"5":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Shows</span>");
  },"7":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Venues</span>");
  },"9":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>FAQs</span>");
  },"11":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>2013 Press</span>");
  },"13":function(depth0,helpers,partials,data) {
  data.buffer.push("<span>Contact</span>");
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n       ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"header-color1\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performers", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color2\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "shows", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color4\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venues", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color5 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "faqs", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color1 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"header-color3 hidden-sm\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        <li class=\"dropdown visible-sm \">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            More Info <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header-color5\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "press", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(11, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color2\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "contact", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li class=\"header-color3\">");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "faqs", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n          </ul>\n        </li>\n      </ul>\n      <div class=\"navbar-form navbar-right\">\n      </div>\n    </div><!--/.navbar-collapse -->\n  </div>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_news"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("\n<div class=\"newspost\" style=\"margin-top:50px;\">\n  <div class=\"newspost-content\">\n    <p>Submissions for the 2015 Bridgetown Comedy Festival, taking place May 7 - 10, are now open! Visit http://bridgetown.festivalthing.com to apply to perform as a standup comic or to submit your themed show or podcast for consideration. Submissions are open until February 1st, but if you apply by January 11th you save $5 off of the $25 submission fee, so put those videos together and show us what you've got!</p>\n  </div>\n</div>\n\n\n\n\n\n");
  },"useData":true});

Ember.TEMPLATES["partials/_performer_box"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("    <img class=\"img-responsive\" width=\"300\" height=\"300\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'src': ("headshot300")
  },"hashTypes":{'src': "STRING"},"hashContexts":{'src': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" />\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("      ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<div class=\"col-xs-6 col-sm-6 col-sm-4 col-md-3 col-lg-2 performer-box\">\n  <div class=\"performer-thumbnail\">\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </div>\n  <legend>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </legend>\n</div>\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_recent_tweets"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  data.buffer.push("<a class=\"twitter-timeline\" href=\"https://twitter.com/bridgetown\" data-widget-id=\"432300245716713474\">Tweets by @bridgetown</a>\n\n\n\n");
  },"useData":true});

Ember.TEMPLATES["partials/_schedule_list_item"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "show", "show", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression;
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "show.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "event", "", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(5, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression;
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("\n          <span class=\"schedule-list__item-venue-label label label-default\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n");
  return buffer;
},"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("\n            <li>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(10, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </li>\n\n");
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "performer.Name", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n");
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("            <li><strong>MC: </strong>\n");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(13, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("            </li>\n");
  return buffer;
},"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("              <span class=\"label label-default schedule__label-performer\">\n                ");
  stack1 = helpers.unbound.call(depth0, "emcee.Name", {"name":"unbound","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n              </span>\n");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': (":schedule-list__item :list-group-item weekday")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n     <div class=\"col-sm-4\">\n        <p class=\"lead\">\n");
  stack1 = helpers['if'].call(depth0, "show", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.program(4, data),"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("          <br/>\n          <small>(");
  data.buffer.push(escapeExpression(((helpers.getWeekday || (depth0 && depth0.getWeekday) || helperMissing).call(depth0, "start_time", {"name":"getWeekday","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - </span>\n          <span style=\"white-space:nowrap\">");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("</span>)</small>\n        </p>\n        <p>Price: ");
  stack1 = helpers._triageMustache.call(depth0, "Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      </div>\n      <div class=\"col-xs-5 col-sm-4\">\n        <p>");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "venue", "venue.pageUrl", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </p>\n      </div>\n      <div class=\"col-xs-7 col-sm-4\">\n        <ul class=\"schedule-list__performer-list\">\n\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(9, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers.each.call(depth0, "emcee", "in", "emcees", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(12, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </ul>\n        &nbsp;\n      </div>\n    </div>\n  </div>\n</li>\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_friday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Friday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_saturday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.saturdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Saturday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_sunday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Thursday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_schedule_table_thursday"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.thursdayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Thursday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["partials/_sponsors_front_page"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});

Ember.TEMPLATES["schedule-grid/friday-table"] = Ember.Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("   <tr>\n    <th>");
  stack1 = helpers._triageMustache.call(depth0, "venue.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n");
  stack1 = helpers.each.call(depth0, "event", "in", "venue.fridayEvents", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(2, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("    </tr>\n");
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("        <td class=\"schedule-table__cell\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-start-time': ("event.start_time")
  },"hashTypes":{'data-start-time': "STRING"},"hashContexts":{'data-start-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'data-end-time': ("event.end_time")
  },"hashTypes":{'data-end-time': "STRING"},"hashContexts":{'data-end-time': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n        <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "event.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "event.Cost", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n        <br />\n        ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.start_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(((helpers.getTime || (depth0 && depth0.getTime) || helperMissing).call(depth0, "event.end_time", {"name":"getTime","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n        <br />\n");
  stack1 = helpers.each.call(depth0, "performer", "in", "event.sortedPerformers", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(3, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  stack1 = helpers['if'].call(depth0, "event.emcee", {"name":"if","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(6, data),"inverse":this.noop,"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("        </td>\n");
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "performer", {"name":"link-to","hash":{
    'classNames': ("comma-list")
  },"hashTypes":{'classNames': "STRING"},"hashContexts":{'classNames': depth0},"fn":this.program(4, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, buffer = '';
  data.buffer.push("          ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "performer.Name", {"name":"_triageMustache","hash":{
    'unescaped': ("true")
  },"hashTypes":{'unescaped': "STRING"},"hashContexts":{'unescaped': depth0},"types":["ID"],"contexts":[depth0],"data":data})));
  data.buffer.push("\n");
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("          ");
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "performer", "event.emcee", {"name":"link-to","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(7, data),"inverse":this.noop,"types":["STRING","ID"],"contexts":[depth0,depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = '';
  data.buffer.push("<span class=\"label label-default schedule__label-performer\">MC: ");
  stack1 = helpers._triageMustache.call(depth0, "event.emcee.Name", {"name":"_triageMustache","hash":{},"hashTypes":{},"hashContexts":{},"types":["ID"],"contexts":[depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("<table class=\"schedule-table\">\n  <thead>\n  <tr>\n  <th style=\"display:none;\">Venue</th>\n  ");
  stack1 = ((helpers.scheduleTableHeaderRow || (depth0 && depth0.scheduleTableHeaderRow) || helperMissing).call(depth0, "Friday", {"name":"scheduleTableHeaderRow","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}));
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tr>\n  </thead>\n  <tbody>\n");
  stack1 = helpers.each.call(depth0, "venue", "in", "controller.venues", {"name":"each","hash":{},"hashTypes":{},"hashContexts":{},"fn":this.program(1, data),"inverse":this.noop,"types":["ID","ID","ID"],"contexts":[depth0,depth0,depth0],"data":data});
  if (stack1 != null) { data.buffer.push(stack1); }
  data.buffer.push("  </tbody>\n</table>");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/friday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_friday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/friday_schedule"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Friday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_friday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/saturday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Saturday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "schedule_table_saturday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/sunday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Sunday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_sunday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});

Ember.TEMPLATES["schedule-grid/thursday"] = Ember.Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = '';
  data.buffer.push("  <div class=\"jumbotron jumbotron-minor jumbotron-color-1  jumbotron-page-header\">\n    <div class=\"container\">\n      <div class=\"row centered\">\n        <div class=\"col-lg-8 col-lg-offset-2\">\n        <h1>Thursday Schedule</h1>\n        </div>\n      </div><!-- row -->\n    </div><!-- container -->\n  </div><!-- headerwrap -->\n\n<div class=\"container main-content\">\n  <div id=\"schedules\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {"name":"bind-attr","hash":{
    'class': ("scheduleClass")
  },"hashTypes":{'class': "STRING"},"hashContexts":{'class': depth0},"types":[],"contexts":[],"data":data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression(((helpers.partial || (depth0 && depth0.partial) || helperMissing).call(depth0, "partials/schedule_table_thursday", {"name":"partial","hash":{},"hashTypes":{},"hashContexts":{},"types":["STRING"],"contexts":[depth0],"data":data}))));
  data.buffer.push("\n  </div>\n</div>\n\n\n\n\n\n");
  return buffer;
},"useData":true});