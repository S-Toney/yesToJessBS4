using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(yesToJessBS4.Startup))]
namespace yesToJessBS4
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
