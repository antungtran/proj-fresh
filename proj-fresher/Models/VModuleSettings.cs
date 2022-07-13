namespace Training.Models
{
	public class VModuleSettings
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string VModuleId { get; set; }
        public VModuleJsonSettings JsonSettings { get; set; }

        public VModuleSettings()
        {
            JsonSettings = new VModuleJsonSettings();
        }
    }

    public class VModuleJsonSettings
	{

	}
}